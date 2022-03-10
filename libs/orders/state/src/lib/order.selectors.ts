import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ORDER_FEATURE_KEY, OrderState } from './order.reducer';

export const selectOrderState = createFeatureSelector<OrderState>(ORDER_FEATURE_KEY);

export const selectOrderCreating = createSelector(selectOrderState, (state) => state.orderCreating);

export const selectCustomer = createSelector(selectOrderState, (state) => state.customer);
