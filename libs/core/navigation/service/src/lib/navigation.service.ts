import { Inject, Injectable } from '@angular/core';
import { NavigationExtras, Router, UrlCreationOptions, UrlTree } from '@angular/router';

import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private readonly router: Router, @Inject(PATHS) private readonly paths: NavigationPaths) {}

  get url(): string {
    return this.router.url;
  }

  getPaths(): NavigationPaths {
    return this.paths;
  }

  createUrlTree(path: string | (string | number)[], navigationExtras?: UrlCreationOptions): UrlTree {
    return this.router.createUrlTree(typeof path === 'string' ? this.getRoute(path) : path, navigationExtras);
  }

  getRoute(navigationPath: string, params: Record<string, string | number> = {}): (string | number)[] {
    const segments = navigationPath.split('/').filter((value) => value?.length);
    const routeWithParams: (string | number)[] = ['/'];

    for (const segment of segments) {
      if (segment.charAt(0) === ':') {
        const paramName = segment.slice(1);
        if (params && params[paramName]) {
          routeWithParams.push(params[paramName]);
        } else {
          routeWithParams.push(paramName);
        }
      } else {
        routeWithParams.push(segment);
      }
    }

    return routeWithParams;
  }

  navigate(navigationPath: (string | number)[], extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate(navigationPath, extras);
  }

  navigateByUrl(navigationPath: string, params?: Record<string, string | number>, extras?: NavigationExtras): Promise<boolean> {
    return this.navigate(this.getRoute(navigationPath, params), extras);
  }
}
