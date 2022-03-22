import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PRODUCT_FEATURE_KEY, productAdapter, ProductState } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>(PRODUCT_FEATURE_KEY);

const { selectAll, selectEntities } = productAdapter.getSelectors();

export const selectProducts = createSelector(selectProductState, (state) => selectAll(state));

export const selectProductsEntities = createSelector(selectProductState, (state) => selectEntities(state));

export const selectLoaded = createSelector(selectProductState, (state) => state.loaded);

export const selectSelectedId = createSelector(selectProductState, (state) => state.selectedId);

export const selectSelectedProduct = createSelector(selectProductsEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : null
);

export const selectProduct = (id: number) => createSelector(selectProductsEntities, (entities) => entities[id] ?? null);

export const selectProductBySlug = (slug: string) =>
  createSelector(selectProducts, (products) => products.find((product) => product.slug === slug) ?? null);
