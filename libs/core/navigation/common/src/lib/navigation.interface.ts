import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  home: string;
  support: string;
  cart: string;
  order: string;
  contacts: string;
  terms: string;

  product: string;

  // Errors
  serverError: string;
  notFound: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  home: '',
  support: 'support',
  cart: 'cart',
  order: 'order',
  contacts: 'contacts',
  terms: 'terms',

  product: 'product/:slug',

  serverError: 'server-error',
  notFound: 'not-found',
};

export interface NavigationLink {
  route: string;
  label: string;
  params?: Record<string, string>;
  routerLinkActiveOptions?: { exact: boolean };
}

export const PATHS = new InjectionToken<Record<string, string>>('NAVIGATION_PATHS');
