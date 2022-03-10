import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';

import { CartKeys, CartProduct } from '@banshop/cart/common';
import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { createOrderSuccess } from '@banshop/orders/state';

import * as CartActions from './cart.actions';
import { selectCartProductId } from './cart.reducer';
import * as CartSelectors from './cart.selectors';

@Injectable()
export class CartEffects implements OnInitEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<CartProduct[] | null>(CartKeys.Cart)),
      fetch({
        run: (action, cartProducts) => CartActions.restore({ cartProducts: cartProducts ?? [] }),
      })
    );
  });

  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addProduct),
      concatLatestFrom(() => this.store.select(CartSelectors.selectCartProductsEntities)),
      fetch({
        run: ({ cartProduct }, cartProducts) =>
          !cartProducts[selectCartProductId(cartProduct)]
            ? CartActions.addProductSuccess({ cartProduct })
            : CartActions.addProductFailure({ error: $localize`:Cart State|:Duplicate CartProduct`, cartProduct }),
        onError(action, error) {
          console.log(error);
        },
      })
    );
  });

  removeProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.removeProduct),
      concatLatestFrom(() => this.store.select(CartSelectors.selectCartProductsEntities)),
      fetch({
        run: ({ cartProduct }, cartProducts) =>
          cartProducts[selectCartProductId(cartProduct)]
            ? CartActions.removeProductSuccess({ cartProduct })
            : CartActions.removeProductFailure({ error: $localize`:Cart State|:CartProduct was not found`, cartProduct }),
      })
    );
  });

  changeProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.changeProduct),
      concatLatestFrom(() => this.store.select(CartSelectors.selectCartProductsEntities)),
      fetch({
        run: ({ cartProduct }, cartProducts) =>
          cartProducts[selectCartProductId(cartProduct)]
            ? CartActions.changeProductSuccess({ cartProduct })
            : CartActions.changeProductFailure({ error: $localize`:Cart State|:CartProduct was not found`, cartProduct }),
      })
    );
  });

  saveCartToLocalStorage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addProductSuccess, CartActions.changeProductSuccess, CartActions.removeProductSuccess),
      concatLatestFrom(() => this.store.select(CartSelectors.selectCartProducts)),
      fetch({
        run: (action, cartProducts) => this.localAsyncStorage.setItem(CartKeys.Cart, cartProducts),
      })
    );
  });

  createOrderSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createOrderSuccess),
      fetch({
        run: () => {
          this.localAsyncStorage.removeItem(CartKeys.Cart);

          return CartActions.clear();
        },
      })
    );
  });

  constructor(private readonly actions$: Actions, private readonly localAsyncStorage: LocalAsyncStorage, private readonly store: Store) {}

  ngrxOnInitEffects(): Action {
    return CartActions.init();
  }
}
