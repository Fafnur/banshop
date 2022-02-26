import { instance, mock } from 'ts-mockito';

import { ProductFacade } from '@banshop/products/state';

import { ProductByIdPipe } from './product-by-id.pipe';

/**
 * TODO: Add tests
 */
describe('ProductByIdPipe', () => {
  let pipe: ProductByIdPipe;
  let productFacadeMock: ProductFacade;

  beforeEach(() => {
    productFacadeMock = mock(ProductFacade);

    pipe = new ProductByIdPipe(instance(productFacadeMock));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
