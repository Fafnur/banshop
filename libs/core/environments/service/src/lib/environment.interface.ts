import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  brand: string;
  google?: {
    id: string;
    name: string;
    key: string;
  };
}

export const ENVIRONMENTS = new InjectionToken<Environments>('ENVIRONMENTS');
