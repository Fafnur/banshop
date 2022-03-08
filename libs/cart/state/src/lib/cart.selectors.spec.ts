import { CART_PRODUCTS_STUB, CartProduct } from '@banshop/cart/common';

import { CART_FEATURE_KEY, cartAdapter, cartInitialState, CartPartialState, CartState } from './cart.reducer';
import * as CartSelectors from './cart.selectors';

describe('Cart Selectors', () => {
  const getStore = (state?: Partial<CartState>, products: CartProduct[] = []): CartPartialState => ({
    [CART_FEATURE_KEY]: cartAdapter.setAll(products, { ...cartInitialState, ...state }),
  });

  let state: CartPartialState;

  beforeEach(() => {
    state = getStore();
  });

  it('getCartError() should return the current "error" state', () => {
    state = getStore({ loaded: true }, CART_PRODUCTS_STUB);
    const result = CartSelectors.selectCartProductsEntities(state);

    expect(Object.keys(result).length).toEqual(CART_PRODUCTS_STUB.length);
  });

  it('selectCartProducts() should return cardProducts', () => {
    state = getStore({ loaded: true }, CART_PRODUCTS_STUB);
    const results = CartSelectors.selectCartProducts(state);

    expect(results.length).toBe(CART_PRODUCTS_STUB.length);
  });

  it('selectCartLoaded() should return loaded', () => {
    state = getStore({ loaded: true });
    const result = CartSelectors.selectLoaded(state);

    expect(result).toBeTruthy();
  });
});
