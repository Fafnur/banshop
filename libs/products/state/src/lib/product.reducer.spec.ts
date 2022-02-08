import { Action } from '@ngrx/store';

import { Product, PRODUCTS_STUB } from '@banshop/products/common';

import * as ProductActions from './product.actions';
import { productAdapter, productInitialState, ProductState, reducer } from './product.reducer';

describe('Product Reducer', () => {
  const getState = (state?: Partial<ProductState>, products: Product[] = []): ProductState =>
    productAdapter.setAll(products, { ...productInitialState, ...state });

  let state: ProductState;

  beforeEach(() => {
    state = getState();
  });

  it('loadSuccess() should return set products', () => {
    const action = ProductActions.loadSuccess({ products: PRODUCTS_STUB });
    const result = reducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(1);
  });

  it('should return the previous state', () => {
    const action = {} as Action;

    const result = reducer(productInitialState, action);

    expect(result).toBe(productInitialState);
  });
});
