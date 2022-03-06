import { instance, mock } from 'ts-mockito';

import { ProductFacade } from '@banshop/products/state';

import { CartTotalPricePipe } from './cart-total-price.pipe';

describe('CartTotalPricePipe', () => {
  let pipe: CartTotalPricePipe;
  let productFacadeMock: ProductFacade;

  beforeEach(() => {
    productFacadeMock = mock(ProductFacade);

    pipe = new CartTotalPricePipe(instance(productFacadeMock));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
