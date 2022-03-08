import { CartProduct } from '@banshop/cart/common';
import { Product } from '@banshop/products/common';

export interface Customer {
  name: string;
  phone: string;
  email: string;
  city: string;
  postcode: string;
  address: string;
}

export interface OrderCreate {
  customer: Customer;
  cartProducts: CartProduct[];
}

export interface Order extends OrderCreate {
  products: Product[];
}
