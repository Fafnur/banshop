import { Product, PRODUCTS_STUB } from '@banshop/products/common';

import { PRODUCT_FEATURE_KEY, productAdapter, productInitialState, ProductPartialState, ProductState } from './product.reducer';
import * as ProductSelectors from './product.selectors';

describe('Product Selectors', () => {
  const getStore = (state?: Partial<ProductState>, products: Product[] = []) => ({
    [PRODUCT_FEATURE_KEY]: productAdapter.setAll(products, { ...productInitialState, ...state }),
  });

  const SELECTED_ID_STUB = PRODUCTS_STUB[0].id;

  let state: ProductPartialState;

  beforeEach(() => {
    state = getStore();
  });

  it('selectProducts() should return products', () => {
    state = getStore({}, PRODUCTS_STUB);
    const results = ProductSelectors.selectProducts(state);

    expect(results.length).toBe(PRODUCTS_STUB.length);
  });

  it('selectSelectedProduct() should return the selected Entity', () => {
    state = getStore({ selectedId: SELECTED_ID_STUB }, PRODUCTS_STUB);
    const result = ProductSelectors.selectSelectedProduct(state);

    expect(result?.id).toBe(SELECTED_ID_STUB);
  });

  it('selectLoaded() should return the current "loaded" status', () => {
    state = getStore({ loaded: true });
    const result = ProductSelectors.selectLoaded(state);

    expect(result).toBeTruthy();
  });

  it('selectProduct() should return product by id', () => {
    state = getStore({}, PRODUCTS_STUB);
    const result = ProductSelectors.selectProduct(SELECTED_ID_STUB)(state);

    expect(result?.id).toBe(SELECTED_ID_STUB);
  });
});
