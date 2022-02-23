import { TestBed, waitForAsync } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { HTTP_ERROR_STUB } from '@banshop/core/api/service';
import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';
import { ProductApiService } from '@banshop/products/api';
import { ProductKeys, PRODUCTS_STUB } from '@banshop/products/common';

import * as ProductActions from './product.actions';
import { ProductEffects } from './product.effects';

describe('ProductEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductEffects;
  let localAsyncStorageMock: LocalAsyncStorage;
  let productApiServiceMock: ProductApiService;
  let transferStateMock: TransferState;

  beforeEach(() => {
    localAsyncStorageMock = mock(LocalAsyncStorage);
    productApiServiceMock = mock(ProductApiService);
    transferStateMock = mock(TransferState);

    // skip errors
    console.error = jest.fn();
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        providers: [
          ProductEffects,
          provideMockActions(() => actions),
          provideMockStore(),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(ProductApiService, productApiServiceMock),
          providerOf(TransferState, transferStateMock),
        ],
      });
    })
  );

  beforeEach(() => {
    effects = TestBed.inject(ProductEffects);
  });

  describe('init$', () => {
    it('should return restore', () => {
      actions = hot('-a-|', { a: ProductActions.init() });
      when(localAsyncStorageMock.getItem(ProductKeys.Products)).thenReturn(of([]));

      const expected = hot('-a-|', { a: ProductActions.restore({ products: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('load$', () => {
    it('should return loadSuccess', () => {
      const action = ProductActions.load();
      const completion = ProductActions.loadSuccess({ products: PRODUCTS_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: PRODUCTS_STUB });
      const expected = cold('--a|', { a: completion });
      when(productApiServiceMock.load()).thenReturn(response);

      expect(effects.load$).toBeObservable(expected);
    });

    it('should return loadFailure', () => {
      const action = ProductActions.load();
      const completion = ProductActions.loadFailure({ error: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });
      when(productApiServiceMock.load()).thenReturn(response);

      expect(effects.load$).toBeObservable(expected);
    });
  });
});
