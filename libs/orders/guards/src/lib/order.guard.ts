import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartFacade } from '@banshop/cart/state';
import { NavigationService } from '@banshop/core/navigation/service';
import { PlatformService } from '@banshop/core/platform/service';

@Injectable()
export class OrderGuard implements CanActivate {
  constructor(
    private readonly platformService: PlatformService,
    private readonly navigationService: NavigationService,
    private readonly cartFacade: CartFacade
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    if (!this.platformService.isBrowser) {
      return of(false);
    }

    return this.cartFacade.cartProducts$.pipe(
      map((cartProducts) => cartProducts.length > 0 || this.navigationService.createUrlTree(this.navigationService.getPaths().home))
    );
  }
}
