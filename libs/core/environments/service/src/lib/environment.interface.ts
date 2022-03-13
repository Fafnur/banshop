import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  brand: string;
  phone: string;
  google?: {
    id: string;
    name: string;
    key: string;
  };
  appHost: string;
}

export const ENVIRONMENTS = new InjectionToken<Environments>('ENVIRONMENTS');

export const ENVIRONMENTS_DEFAULT: Environments = {
  production: false,
  brand: 'Banshop',
  phone: '88002000000',
  appHost: 'http://localhost',
};
