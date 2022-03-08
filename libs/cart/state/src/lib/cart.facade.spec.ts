import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';
import { BehaviorSubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CART_PRODUCT_STUB, CartKeys, CartProduct } from '@banshop/cart/common';
import { LocalAsyncStorage } from '@banshop/core/storage/local';

import * as CartActions from './cart.actions';
import { CartEffects } from './cart.effects';
import { CartFacade } from './cart.facade';
import { CART_FEATURE_KEY, reducer } from './cart.reducer';

describe('CartFacade', () => {
  let facade: CartFacade;
  let store: Store;
  let localAsyncStorageMock: LocalAsyncStorage;
  let getItem$: BehaviorSubject<CartProduct[] | null>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      localAsyncStorageMock = mock(LocalAsyncStorage);

      getItem$ = new BehaviorSubject<CartProduct[] | null>(null);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(CART_FEATURE_KEY, reducer), EffectsModule.forFeature([CartEffects])],
        providers: [CartFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      when(localAsyncStorageMock.getItem(CartKeys.Cart)).thenReturn(getItem$);
      facade = TestBed.inject(CartFacade);
      store = TestBed.inject(Store);
    });

    it('addProduct() should add product', async () => {
      let cartProducts = await readFirst(facade.cartProducts$);

      expect(cartProducts.length).toBe(0);

      facade.addProduct(CART_PRODUCT_STUB);

      cartProducts = await readFirst(facade.cartProducts$);

      expect(cartProducts.length).toBe(1);
    });

    it('removeProduct() should remove product', async () => {
      store.dispatch(CartActions.addProductSuccess({ cartProduct: CART_PRODUCT_STUB }));

      let cartProducts = await readFirst(facade.cartProducts$);
      expect(cartProducts.length).toBe(1);

      facade.removeProduct(CART_PRODUCT_STUB);

      cartProducts = await readFirst(facade.cartProducts$);

      expect(cartProducts.length).toBe(0);
    });

    it('changeProduct() should change product', async () => {
      store.dispatch(CartActions.addProductSuccess({ cartProduct: CART_PRODUCT_STUB }));

      let cartProducts = await readFirst(facade.cartProducts$);
      expect(cartProducts.length).toBe(1);

      facade.changeProduct({ ...CART_PRODUCT_STUB, count: 2 });

      cartProducts = await readFirst(facade.cartProducts$);

      expect(cartProducts[0].count).toBe(2);
    });

    it('clear() should remove all', async () => {
      store.dispatch(CartActions.addProductSuccess({ cartProduct: CART_PRODUCT_STUB }));

      let cartProducts = await readFirst(facade.cartProducts$);
      expect(cartProducts.length).toBe(1);

      facade.clear();

      cartProducts = await readFirst(facade.cartProducts$);

      expect(cartProducts.length).toBe(0);
    });
  });
});
