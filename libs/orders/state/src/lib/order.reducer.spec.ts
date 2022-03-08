import { Action } from '@ngrx/store';

import { CUSTOMER_STUB } from '@banshop/orders/common';

import * as OrderActions from './order.actions';
import { orderInitialState, OrderState, reducer } from './order.reducer';

describe('Order Reducer', () => {
  const getState = (state?: Partial<OrderState>): OrderState => ({ ...orderInitialState, ...state });

  let state: OrderState;

  beforeEach(() => {
    state = getState();
  });

  it('restore() should restore customer', () => {
    const action = OrderActions.restore({ customer: CUSTOMER_STUB });
    const result = reducer(state, action);

    expect(result.customer).toEqual(CUSTOMER_STUB);
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = reducer(orderInitialState, action);

    expect(result).toBe(orderInitialState);
  });
});
