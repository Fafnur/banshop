import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as OrderActions from './order.actions';
import * as OrderFeature from './order.reducer';

@Injectable()
export class OrderEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return OrderActions.loadOrderSuccess({ order: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return OrderActions.loadOrderFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
