export enum CartKeys {
  Cart = 'cart',
}

export interface CartProduct {
  productId: number;
  count: number;
  size: number;
}
