export interface CartProduct {
  id: number;
  count: number;
  size: number;
}

export interface Cart {
  products: CartProduct[];
}
