import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';
import { ProductApiService } from '@banshop/products/api';
import { PRODUCTS_STUB } from '@banshop/products/common';

import { ProductEffects } from './product.effects';
import { ProductFacade } from './product.facade';
import { PRODUCT_FEATURE_KEY, reducer } from './product.reducer';

describe('ProductFacade', () => {
  let facade: ProductFacade;
  let localAsyncStorageMock: LocalAsyncStorage;
  let productApiServiceMock: ProductApiService;

  describe('used in NgModule', () => {
    beforeEach(() => {
      localAsyncStorageMock = mock(LocalAsyncStorage);
      productApiServiceMock = mock(ProductApiService);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(PRODUCT_FEATURE_KEY, reducer), EffectsModule.forFeature([ProductEffects])],
        providers: [
          ProductFacade,
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(ProductApiService, productApiServiceMock),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      when(localAsyncStorageMock.getItem(anything())).thenReturn(of(null));

      facade = TestBed.inject(ProductFacade);
    });

    it('load() should return empty list with loaded == true', async () => {
      let products = await readFirst(facade.products$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(products.length).toBe(0);
      expect(isLoaded).toBeFalsy();

      when(productApiServiceMock.load()).thenReturn(of(PRODUCTS_STUB));

      facade.load();

      products = await readFirst(facade.products$);
      isLoaded = await readFirst(facade.loaded$);

      expect(isLoaded).toBeTruthy();
      expect(products.length).toBe(1);
    });
  });
});
