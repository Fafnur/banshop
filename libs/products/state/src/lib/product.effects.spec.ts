import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { mock } from 'ts-mockito';

import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';
import { ProductApiService } from '@banshop/products/api';

import * as ProductActions from './product.actions';
import { ProductEffects } from './product.effects';

describe('ProductEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductEffects;
  let localAsyncStorageMock: LocalAsyncStorage;
  let productApiServiceMock: ProductApiService;

  beforeEach(() => {
    localAsyncStorageMock = mock(LocalAsyncStorage);
    productApiServiceMock = mock(ProductApiService);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        providerOf(LocalAsyncStorage, localAsyncStorageMock),
        providerOf(ProductApiService, productApiServiceMock),
      ],
    });

    effects = TestBed.inject(ProductEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ProductActions.init() });

      const expected = hot('-a-|', { a: ProductActions.loadSuccess({ products: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
