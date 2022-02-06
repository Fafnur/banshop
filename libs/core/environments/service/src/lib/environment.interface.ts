import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  brand: string;
  google?: {
    id: string;
    products: string;
  };
}

export const ENVIRONMENTS = new InjectionToken<Environments>('ENVIRONMENTS');
