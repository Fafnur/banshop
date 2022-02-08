import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Product } from '@banshop/products/common';

import * as ProductActions from './product.actions';

export const PRODUCT_FEATURE_KEY = 'products';

export interface ProductState extends EntityState<Product> {
  selectedId: number | null;
  loaded: boolean;
}

export interface ProductPartialState {
  readonly [PRODUCT_FEATURE_KEY]: ProductState;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const productInitialState: ProductState = productAdapter.getInitialState({
  selectedId: null,
  loaded: false,
});

const productReducer = createReducer(
  productInitialState,
  on(
    ProductActions.init,
    (state): ProductState => ({
      ...state,
      loaded: false,
    })
  ),
  on(
    ProductActions.restore,
    (state, { products }): ProductState =>
      productAdapter.setAll(products, {
        ...state,
        loaded: products.length > 0,
      })
  ),
  on(
    ProductActions.loadSuccess,
    (state, { products }): ProductState =>
      productAdapter.setAll(products, {
        ...state,
        loaded: true,
      })
  ),
  on(
    ProductActions.loadFailure,
    (state): ProductState => ({
      ...state,
      loaded: false,
    })
  )
);

export function reducer(state: ProductState | undefined, action: Action): ProductState {
  return productReducer(state, action);
}
