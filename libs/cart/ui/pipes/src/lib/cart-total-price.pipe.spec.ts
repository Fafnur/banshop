import { Dictionary } from '@ngrx/entity';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';
import { instance, mock, when } from 'ts-mockito';

import { CART_PRODUCTS_STUB } from '@banshop/cart/common';
import { Product, PRODUCTS_ENTITIES_STUB } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

import { CartTotalPricePipe } from './cart-total-price.pipe';

describe('CartTotalPricePipe', () => {
  let pipe: CartTotalPricePipe;
  let productFacadeMock: ProductFacade;
  let productsEntities$: BehaviorSubject<Dictionary<Product>>;

  beforeEach(() => {
    productFacadeMock = mock(ProductFacade);
    productsEntities$ = new BehaviorSubject<Dictionary<Product>>(PRODUCTS_ENTITIES_STUB);
  });

  beforeEach(() => {
    when(productFacadeMock.productsEntities$).thenReturn(productsEntities$);

    pipe = new CartTotalPricePipe(instance(productFacadeMock));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return count', () => {
    expect(pipe.transform(CART_PRODUCTS_STUB)).toBeObservable(
      cold('a', { a: PRODUCTS_ENTITIES_STUB[CART_PRODUCTS_STUB[0].productId]?.price })
    );
  });
});
