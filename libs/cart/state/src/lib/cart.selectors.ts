import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CART_FEATURE_KEY, cartAdapter, CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>(CART_FEATURE_KEY);

const { selectAll, selectEntities } = cartAdapter.getSelectors();

export const selectLoaded = createSelector(selectCartState, (state: CartState) => state.loaded);

export const selectCartProducts = createSelector(selectCartState, (state: CartState) => selectAll(state));

export const selectCartProductsEntities = createSelector(selectCartState, (state: CartState) => selectEntities(state));
