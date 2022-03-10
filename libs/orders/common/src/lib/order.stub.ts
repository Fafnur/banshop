import { CART_PRODUCTS_STUB } from '@banshop/cart/common';
import { PRODUCTS_STUB } from '@banshop/products/common';

import { Customer, Order, OrderCreate, OrderDetails } from './order.interface';

export const CUSTOMER_STUB: Customer = {
  city: 'Новосибирск',
  name: 'Иванов Иван Иванович',
  email: 'ivan@ivan.ru',
  address: 'ул. Ленина 12, кв 15',
  phone: '+79231002020',
  postcode: '630099',
};

export const ORDER_CREATE_STUB: OrderCreate = {
  customer: CUSTOMER_STUB,
  cartProducts: CART_PRODUCTS_STUB,
};

export const ORDER_STUB: Order = {
  ...ORDER_CREATE_STUB,
  products: PRODUCTS_STUB,
};

export const ORDER_DETAILS_STUB: OrderDetails = {
  id: 'OR-100920',
};
