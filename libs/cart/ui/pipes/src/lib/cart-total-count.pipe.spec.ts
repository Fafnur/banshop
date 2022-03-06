import { CART_PRODUCT_NEXT_STUB, CART_PRODUCT_STUB, CART_PRODUCTS_STUB } from '@banshop/cart/common';

import { CartTotalCountPipe } from './cart-total-count.pipe';

describe('CartTotalCountPipe', () => {
  let pipe: CartTotalCountPipe;

  beforeEach(() => {
    pipe = new CartTotalCountPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return count', () => {
    expect(pipe.transform(CART_PRODUCTS_STUB)).toBe(CART_PRODUCT_STUB.count + CART_PRODUCT_NEXT_STUB.count);
  });
});
