import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, LOCALE_ID, Optional } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { EnvironmentService } from '@banshop/core/environments/service';
import {
  META_CONFIG,
  META_CONFIG_DEFAULT,
  META_CONFIG_OG,
  META_CONFIG_OG_DEFAULT,
  MetaConfig,
  MetaConfigOg,
} from '@banshop/core/meta/common';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly metaConfig: MetaConfig;
  private readonly metaConfigOg: MetaConfigOg;

  constructor(
    private readonly titleService: Title,
    private readonly router: Router,
    private readonly meta: Meta,
    private readonly environmentService: EnvironmentService,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(LOCALE_ID) private readonly localeId: string,
    @Optional() @Inject(META_CONFIG) metaConfig: MetaConfig | null,
    @Optional() @Inject(META_CONFIG_OG) metaConfigOg: MetaConfigOg | null
  ) {
    this.metaConfig = metaConfig ?? META_CONFIG_DEFAULT;
    this.metaConfigOg = metaConfigOg ?? META_CONFIG_OG_DEFAULT;
  }

  update(metaConfig?: Partial<MetaConfig>, metaConfigOg?: Partial<MetaConfigOg>): void {
    const config: MetaConfig = { ...this.metaConfig, ...metaConfig };
    const configOg: MetaConfigOg = { ...this.metaConfigOg, ...metaConfigOg };
    this.setCanonicalUrl(config.url);
    this.titleService.setTitle(`${config.title} | ${this.environmentService.environments.brand}`);
    this.setMetaProperty('description', config.description);
    this.setMetaProperty('keywords', config.keywords);
    this.setMetaProperty('og:title', `${configOg.title ?? config.title} | ${this.environmentService.environments.brand}`);
    this.setMetaProperty('og:description', configOg.description ?? config.description);
    this.setMetaProperty('og:type', configOg.type);
    this.setMetaProperty('og:locale', configOg.locale ?? this.localeId);
    this.setMetaProperty('og:site_name', configOg.siteName ?? this.environmentService.environments.brand);
    this.setMetaProperty('og:image', `${this.environmentService.environments.appHost}${configOg.image}`);
    this.setMetaProperty('og:image:type', configOg.imageType);
    this.setMetaProperty('og:image:width', configOg.imageWidth);
    this.setMetaProperty('og:image:height', configOg.imageHeight);
  }

  private setCanonicalUrl(url?: string): void {
    const link = (this.document.getElementById('canonical') ?? this.document.createElement('link')) as HTMLLinkElement;
    link.setAttribute('rel', 'canonical');
    link.setAttribute('id', 'canonical');
    link.setAttribute('href', this.getCanonicalURL(url));
    if (!this.document.getElementById('canonical')) {
      this.document.head.appendChild(link);
    }
  }

  private getCanonicalURL(url?: string): string {
    return `${this.environmentService.environments.appHost}${url ?? this.router.url}`;
  }

  private setMetaProperty(name: string, content: string): void {
    const id = `meta-${name}`;
    const has = !!this.document.getElementById(id);

    const meta: MetaDefinition = { id, name, content };

    if (has) {
      this.meta.updateTag(meta);
    } else {
      this.meta.addTag(meta);
    }
  }
}
