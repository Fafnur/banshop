import { Action } from '@ngrx/store';

import { CART_PRODUCT_STUB, CART_PRODUCTS_STUB, CartProduct } from '@banshop/cart/common';

import * as CartActions from './cart.actions';
import { cartAdapter, cartInitialState, CartState, reducer, selectCartProductId } from './cart.reducer';

describe('Cart Reducer', () => {
  const getState = (state?: Partial<CartState>, products: CartProduct[] = []): CartState =>
    cartAdapter.setAll(products, { ...cartInitialState, ...state });

  let state: CartState;

  beforeEach(() => {
    state = getState();
  });

  it('clear() should remove all', () => {
    state = getState({}, CART_PRODUCTS_STUB);
    const action = CartActions.clear();
    const result = reducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(0);
  });

  it('restore() should restore cartProducts', () => {
    const action = CartActions.restore({ cartProducts: CART_PRODUCTS_STUB });
    const result = reducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(CART_PRODUCTS_STUB.length);
  });

  it('addProductSuccess() should add cartProduct', () => {
    const action = CartActions.addProductSuccess({ cartProduct: CART_PRODUCT_STUB });
    const result = reducer(state, action);

    expect(result.ids.length).toBe(1);
  });

  it('removeProductSuccess() should remove cartProduct', () => {
    state = getState({}, [CART_PRODUCT_STUB]);
    const action = CartActions.removeProductSuccess({ cartProduct: CART_PRODUCT_STUB });
    const result = reducer(state, action);

    expect(result.ids.length).toBe(0);
  });

  it('changeProductSuccess() should change cartProduct', () => {
    state = getState({}, [CART_PRODUCT_STUB]);
    const action = CartActions.changeProductSuccess({ cartProduct: { ...CART_PRODUCT_STUB, count: 100 } });
    const result = reducer(state, action);

    expect(result.entities[selectCartProductId(CART_PRODUCT_STUB)]?.count).toBe(100);
  });

  it('should return the previous state', () => {
    const action = {} as Action;

    const result = reducer(cartInitialState, action);

    expect(result).toBe(cartInitialState);
  });
});
