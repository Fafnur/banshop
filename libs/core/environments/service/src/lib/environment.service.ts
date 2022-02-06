import { Inject, Injectable, Optional } from '@angular/core';

import { ENVIRONMENTS, Environments } from './environment.interface';

export const ENVIRONMENTS_DEFAULT: Environments = {
  production: false,
  brand: 'Banshop',
};

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  readonly environments: Environments;

  constructor(@Optional() @Inject(ENVIRONMENTS) environments: Environments | null) {
    this.environments = environments ?? ENVIRONMENTS_DEFAULT;
  }
}
