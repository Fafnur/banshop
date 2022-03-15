import { cold } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { instance, mock, when } from 'ts-mockito';

import { Product, PRODUCT_STUB } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

import { ProductByIdPipe } from './product-by-id.pipe';

describe('ProductByIdPipe', () => {
  let pipe: ProductByIdPipe;
  let productFacadeMock: ProductFacade;
  let product$: ReplaySubject<Product | null>;

  beforeEach(() => {
    productFacadeMock = mock(ProductFacade);
    product$ = new ReplaySubject<Product | null>(1);
    when(productFacadeMock.product$(PRODUCT_STUB.id)).thenReturn(product$);

    pipe = new ProductByIdPipe(instance(productFacadeMock));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return product', () => {
    product$.next(PRODUCT_STUB);

    expect(pipe.transform(PRODUCT_STUB.id)).toBeObservable(cold('a', { a: PRODUCT_STUB }));
  });
});
