import { MetaConfig } from '@banshop/core/meta/common';

export interface SitemapConfig {
  loc: string;
  lastmod: string;
  priority: string;
  changefreq: string;
}

export interface RouteData {
  sitemap: SitemapConfig;
  meta: MetaConfig;
  metaOg: MetaConfig;
}
