import { InjectionToken } from '@angular/core';

export interface MetaConfigOg {
  title: string;
  description: string;
  type: string;
  locale?: string;
  siteName?: string;
  image: string;
  imageType: string;
  imageWidth: string;
  imageHeight: string;
}

export interface MetaConfig {
  readonly title: string;
  readonly description: string;
  readonly keywords: string;
  readonly url?: string;
}

export const META_CONFIG = new InjectionToken<MetaConfig>('MetaConfig');
export const META_CONFIG_OG = new InjectionToken<MetaConfigOg>('MetaConfigOg');

export const META_CONFIG_DEFAULT: MetaConfig = {
  title: $localize`:Meta default|:Online store Banshop`,
  // eslint-disable-next-line max-len
  description: $localize`:Meta default|:Banshop sportswear, shoes and accessories. Free delivery in Moscow and all over Russia when paying on the website.`,
  keywords: $localize`:Meta default|:sneakers, sports shoes`,
};

export const META_CONFIG_OG_DEFAULT: MetaConfigOg = {
  title: META_CONFIG_DEFAULT.title,
  description: META_CONFIG_DEFAULT.description,
  type: 'website',
  image: '/assets/images/site.jpg',
  imageType: 'image/jpeg',
  imageWidth: '1200',
  imageHeight: '600',
};
