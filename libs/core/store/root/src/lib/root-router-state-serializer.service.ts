import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterReducerStateExtended } from './root.reducer';

/**
 * @see https://ngrx.io/guide/router-store/configuration
 */
@Injectable()
export class RootRouterStateSerializer implements RouterStateSerializer<RouterReducerStateExtended> {
  serialize(routerState: RouterStateSnapshot): RouterReducerStateExtended {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params, data } = route;

    return { url, params, queryParams, data };
  }
}
