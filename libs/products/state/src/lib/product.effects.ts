import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take } from 'rxjs';

import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { ProductApiService } from '@banshop/products/api';
import { Product, ProductKeys } from '@banshop/products/common';

import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects implements OnInitEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<Product[] | null>(ProductKeys.Products).pipe(take(1))),
      fetch({
        id: (action, products) => 'init-products',
        run: (action, products) => ProductActions.restore({ products: products ?? [] }),
        onError: (action, error) => console.error(`Error: ${action.type}\n`, error),
      })
    );
  });

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.load),
      fetch({
        id: () => 'load-products',
        run: () => this.productApiService.load().pipe(map((products) => ProductActions.loadSuccess({ products }))),
        onError: (action, error) => {
          console.error(`Error: ${action.type}\n`, error);

          return ProductActions.loadFailure({ error });
        },
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly localAsyncStorage: LocalAsyncStorage,
    private readonly productApiService: ProductApiService
  ) {}

  ngrxOnInitEffects(): Action {
    return ProductActions.init();
  }
}
