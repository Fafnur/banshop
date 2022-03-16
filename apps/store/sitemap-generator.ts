import { config } from 'dotenv';
import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';

import { environment } from './src/environments/environment.prod';

config({ path: 'apps/store/.env' });

interface SitemapConfig {
  loc: string;
  lastmod: string;
  priority: string;
  changefreq: string;
}

class SitemapGenerator {
  generate(): void {
    const urls = this.getUrls();

    this.getServerData((data) => {
      fs.writeFileSync(
        'apps/store/src/sitemap.xml',
        // eslint-disable-next-line max-len
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}${data}</urlset>`
      );
    });
  }

  private fromDir(startPath: string, filter: string): string[] {
    if (!fs.existsSync(startPath)) {
      console.warn('no dir ', startPath);
      return [];
    }
    const founded = [];
    const files = fs.readdirSync(startPath);
    for (const file of files) {
      const filename = path.join(startPath, file);
      const stat = fs.lstatSync(filename);
      if (stat.isDirectory()) {
        const foundedIn = this.fromDir(filename, filter);
        founded.push(...foundedIn);
      } else if (filename.indexOf(filter) >= 0) {
        founded.push(filename);
      }
    }

    return founded;
  }

  private parseSitemapConfig(source: string): Partial<SitemapConfig> {
    let sitemapConfig = source
      .slice(8)
      .replace(/\n|\t|\s/g, '')
      .replace(/'/g, '"')
      .trim();
    if (sitemapConfig[sitemapConfig.length - 1] === ',') {
      sitemapConfig = sitemapConfig.slice(0, sitemapConfig.length - 1);
    }
    sitemapConfig = sitemapConfig + '}';
    sitemapConfig = sitemapConfig.replace(
      /(\w+:)|(\w+ :)/g,
      (matchedStr: string) => '"' + matchedStr.substring(0, matchedStr.length - 1) + '":'
    );

    return JSON.parse(sitemapConfig);
  }

  private getSitemapUrl(sitemap: Partial<SitemapConfig>): string {
    return `<url><loc>${environment.appHost}${sitemap.loc}</loc><lastmod>${(sitemap.lastmod
      ? new Date(sitemap.lastmod)
      : new Date()
    ).toISOString()}</lastmod><changefreq>${sitemap.changefreq ?? 'daily'}</changefreq><priority>${
      sitemap.priority ?? 0.8
    }</priority></url>`;
  }

  private getUrls(): string {
    const files = [...this.fromDir('./apps/store/src', '-routing.module.ts'), ...this.fromDir('./libs', '-routing.module.ts')];

    let data = '';
    for (const file of files) {
      const fileContent = fs.readFileSync(file, 'utf8');
      const sources = fileContent.replace(/\s+/, ' ').match(/sitemap:\s{[^}]+/g);
      if (sources) {
        for (const source of sources) {
          data += this.getSitemapUrl(this.parseSitemapConfig(source));
        }
      }
    }

    return data;
  }

  private getServerData(cb: (data: string) => void): void {
    let data = '';
    const { GOOGLE_KEY, GOOGLE_ID, GOOGLE_NAME } = process.env;

    if (GOOGLE_KEY && GOOGLE_ID && GOOGLE_NAME) {
      const options = {
        hostname: 'sheets.googleapis.com',
        path: `/v4/spreadsheets/${GOOGLE_ID}/values/${GOOGLE_NAME}?key=${GOOGLE_KEY}`,
        method: 'GET',
      };

      const req = https.request(options, (res) => {
        let body = '';

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          const response = JSON.parse(body);

          if (response.values) {
            for (const product of response.values) {
              data += `<url><loc>${environment.appHost}/product/${
                product[0]
              }</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>`;
            }
          }
          cb(data);
        });
      });

      req.end();
    }
  }
}

// generate
new SitemapGenerator().generate();
