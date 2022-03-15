import { CartProduct } from './cart.interface';

export const CART_PRODUCT_STUB: CartProduct = {
  productId: 1,
  count: 1,
  size: 42.5,
};

export const CART_PRODUCT_NEXT_STUB: CartProduct = {
  productId: 2,
  count: 2,
  size: 42.5,
};

export const CART_PRODUCTS_STUB: CartProduct[] = [CART_PRODUCT_STUB, CART_PRODUCT_NEXT_STUB];
