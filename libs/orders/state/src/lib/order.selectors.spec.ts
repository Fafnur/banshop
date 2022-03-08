import { CUSTOMER_STUB } from '@banshop/orders/common';

import { ORDER_FEATURE_KEY, orderInitialState, OrderPartialState, OrderState } from './order.reducer';
import * as OrderSelectors from './order.selectors';

describe('Order Selectors', () => {
  const getStore = (state?: Partial<OrderState>) => ({
    [ORDER_FEATURE_KEY]: { ...orderInitialState, ...state },
  });
  let state: OrderPartialState;

  beforeEach(() => {
    state = getStore();
  });

  it('selectCustomer() should return customer', () => {
    state = getStore({ customer: CUSTOMER_STUB });
    const results = OrderSelectors.selectCustomer(state);

    expect(results).toBe(CUSTOMER_STUB);
  });

  it('selectCustomer() should return orderCreating', () => {
    state = getStore({ orderCreating: true });
    const results = OrderSelectors.selectOrderCreating(state);

    expect(results).toBeTruthy();
  });
});
