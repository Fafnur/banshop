import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';
import { ProductApiService } from '@banshop/products/api';

import { ProductEffects } from './product.effects';
import { ProductFacade } from './product.facade';
import { PRODUCT_FEATURE_KEY, reducer } from './product.reducer';

describe('ProductFacade', () => {
  let facade: ProductFacade;
  let localAsyncStorageMock: LocalAsyncStorage;
  let productApiServiceMock: ProductApiService;
  let transferStateMock: TransferState;

  describe('used in NgModule', () => {
    beforeEach(() => {
      localAsyncStorageMock = mock(LocalAsyncStorage);
      productApiServiceMock = mock(ProductApiService);
      transferStateMock = mock(TransferState);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(PRODUCT_FEATURE_KEY, reducer), EffectsModule.forFeature([ProductEffects])],
        providers: [
          ProductFacade,
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(ProductApiService, productApiServiceMock),
          providerOf(TransferState, transferStateMock),
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

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
