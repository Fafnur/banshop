import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { CartProduct } from '@banshop/cart/common';

import * as CartActions from './cart.actions';
import * as CartSelectors from './cart.selectors';

@Injectable()
export class CartFacade {
  loaded$ = this.store.select(CartSelectors.selectLoaded);

  count$ = this.store.select(CartSelectors.selectCount);

  cartProducts$ = this.store.select(CartSelectors.selectCartProducts);

  addProductSuccess$ = this.actions$.pipe(
    ofType(CartActions.addProductSuccess),
    map(({ cartProduct }) => cartProduct)
  );

  addProductFailure$ = this.actions$.pipe(
    ofType(CartActions.addProductFailure),
    map(({ cartProduct, error }) => ({ cartProduct, error }))
  );

  changeProductSuccess$ = this.actions$.pipe(
    ofType(CartActions.changeProductSuccess),
    map(({ cartProduct }) => cartProduct)
  );

  changeProductFailure$ = this.actions$.pipe(
    ofType(CartActions.changeProductFailure),
    map(({ cartProduct, error }) => ({ cartProduct, error }))
  );

  removeProductSuccess$ = this.actions$.pipe(
    ofType(CartActions.removeProductSuccess),
    map(({ cartProduct }) => cartProduct)
  );

  removeProductFailure$ = this.actions$.pipe(
    ofType(CartActions.removeProductFailure),
    map(({ cartProduct, error }) => ({ cartProduct, error }))
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  addProduct(cartProduct: CartProduct) {
    this.store.dispatch(CartActions.addProduct({ cartProduct }));
  }

  changeProduct(cartProduct: CartProduct) {
    this.store.dispatch(CartActions.changeProduct({ cartProduct }));
  }

  removeProduct(cartProduct: CartProduct) {
    this.store.dispatch(CartActions.removeProduct({ cartProduct }));
  }

  clear() {
    this.store.dispatch(CartActions.clear());
  }
}
