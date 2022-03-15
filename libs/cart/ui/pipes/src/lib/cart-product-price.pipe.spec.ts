import { CART_PRODUCT_STUB } from '@banshop/cart/common';
import { PRODUCT_STUB } from '@banshop/products/common';

import { CartProductPricePipe } from './cart-product-price.pipe';

describe('CartProductPricePipe', () => {
  let pipe: CartProductPricePipe;

  beforeEach(() => {
    pipe = new CartProductPricePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('shoulr return price', () => {
    expect(pipe.transform(CART_PRODUCT_STUB, PRODUCT_STUB)).toBe(PRODUCT_STUB.price * CART_PRODUCT_STUB.count);
  });
});
