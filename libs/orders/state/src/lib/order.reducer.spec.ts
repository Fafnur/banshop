import { Action } from '@ngrx/store';

import { HTTP_ERROR_STUB } from '@banshop/core/api/service';
import { CUSTOMER_STUB, ORDER_CREATE_STUB, ORDER_DETAILS_STUB } from '@banshop/orders/common';

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

  it('createOrder() should set orderCreating true', () => {
    const action = OrderActions.createOrder({ order: ORDER_CREATE_STUB });
    const result = reducer(state, action);

    expect(result.orderCreating).toBeTruthy();
  });

  it('createOrder() should set orderCreating true', () => {
    state = getState({ orderCreating: true });
    const action = OrderActions.createOrderSuccess({ orderDetails: ORDER_DETAILS_STUB });
    const result = reducer(state, action);

    expect(result.orderCreating).toBeFalsy();
  });

  it('createOrder() should set orderCreating true', () => {
    state = getState({ orderCreating: true });
    const action = OrderActions.createOrderFailure({ error: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.orderCreating).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = reducer(orderInitialState, action);

    expect(result).toBe(orderInitialState);
  });
});
