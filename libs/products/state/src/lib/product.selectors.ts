import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PRODUCT_FEATURE_KEY, productAdapter, ProductState } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>(PRODUCT_FEATURE_KEY);

const { selectAll, selectEntities } = productAdapter.getSelectors();

export const selectProducts = createSelector(selectProductState, (state: ProductState) => selectAll(state));

export const selectProductsEntities = createSelector(selectProductState, (state: ProductState) => selectEntities(state));

export const selectLoaded = createSelector(selectProductState, (state: ProductState) => state.loaded);

export const selectSelectedId = createSelector(selectProductState, (state: ProductState) => state.selectedId);

export const selectSelectedProduct = createSelector(selectProductsEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : null
);

export const selectProduct = (id: number) => createSelector(selectProductsEntities, (entities) => entities[id] ?? null);