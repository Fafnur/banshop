import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CART_FEATURE_KEY, cartAdapter, CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>(CART_FEATURE_KEY);

const { selectAll, selectEntities } = cartAdapter.getSelectors();

export const selectLoaded = createSelector(selectCartState, (state) => state.loaded);

export const selectCartProducts = createSelector(selectCartState, (state) => selectAll(state));

export const selectCartProductsEntities = createSelector(selectCartState, (state) => selectEntities(state));

export const selectCount = createSelector(selectCartProducts, (cartProducts) => cartProducts.reduce((sum, item) => sum + item.count, 0));
