import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';
import { OrdersApiService } from '@banshop/orders/api';
import { OrderKeys } from '@banshop/orders/common';

import { OrderEffects } from './order.effects';
import { OrderFacade } from './order.facade';
import { ORDER_FEATURE_KEY, reducer } from './order.reducer';

describe('OrderFacade', () => {
  let facade: OrderFacade;
  let localAsyncStorageMock: LocalAsyncStorage;
  let ordersApiServiceMock: OrdersApiService;

  describe('used in NgModule', () => {
    beforeEach(() => {
      localAsyncStorageMock = mock(LocalAsyncStorage);
      ordersApiServiceMock = mock(OrdersApiService);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(ORDER_FEATURE_KEY, reducer), EffectsModule.forFeature([OrderEffects])],
        providers: [OrderFacade, providerOf(LocalAsyncStorage, localAsyncStorageMock), providerOf(OrdersApiService, ordersApiServiceMock)],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      when(localAsyncStorageMock.getItem(OrderKeys.Customer)).thenReturn(of(null));
      facade = TestBed.inject(OrderFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
