import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ORDER_FEATURE_KEY, OrderState, orderAdapter } from './order.reducer';

// Lookup the 'Order' feature state managed by NgRx
export const getOrderState = createFeatureSelector<OrderState>(ORDER_FEATURE_KEY);

const { selectAll, selectEntities } = orderAdapter.getSelectors();

export const getOrderLoaded = createSelector(getOrderState, (state: OrderState) => state.loaded);

export const getOrderError = createSelector(getOrderState, (state: OrderState) => state.error);

export const getAllOrder = createSelector(getOrderState, (state: OrderState) => selectAll(state));

export const getOrderEntities = createSelector(getOrderState, (state: OrderState) => selectEntities(state));

export const getSelectedId = createSelector(getOrderState, (state: OrderState) => state.selectedId);

export const getSelected = createSelector(getOrderEntities, getSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);
