import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { HTTP_ERROR_STUB } from '@banshop/core/api/service';
import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';
import { OrdersApiService } from '@banshop/orders/api';
import { CUSTOMER_STUB, ORDER_CREATE_STUB, ORDER_DETAILS_STUB, OrderKeys } from '@banshop/orders/common';

import * as OrderActions from './order.actions';
import { OrderEffects } from './order.effects';
import { orderInitialState } from './order.reducer';

describe('OrderEffects', () => {
  let actions: Observable<Action>;
  let effects: OrderEffects;
  let localAsyncStorageMock: LocalAsyncStorage;
  let ordersApiServiceMock: OrdersApiService;

  beforeEach(() => {
    localAsyncStorageMock = mock(LocalAsyncStorage);
    ordersApiServiceMock = mock(OrdersApiService);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          OrderEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: {
              order: orderInitialState,
              products: {
                ids: [],
                entities: {},
              },
            },
          }),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(OrdersApiService, ordersApiServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(localAsyncStorageMock.getItem(OrderKeys.Customer)).thenReturn(of(null));

    effects = TestBed.inject(OrderEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: OrderActions.init() });
      const expected = hot('-a-|', { a: OrderActions.restore({ customer: null }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('createOrder$', () => {
    it('should return createOrderSuccess', () => {
      const action = OrderActions.createOrder({ order: ORDER_CREATE_STUB });
      const completion = OrderActions.createOrderSuccess({ orderDetails: ORDER_DETAILS_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: ORDER_DETAILS_STUB });
      const expected = cold('--a|', { a: completion });
      when(ordersApiServiceMock.createOrder(deepEqual({ ...ORDER_CREATE_STUB, products: [] }))).thenReturn(response);

      expect(effects.createOrder$).toBeObservable(expected);
    });

    it('should return createOrderFailure', () => {
      const action = OrderActions.createOrder({ order: ORDER_CREATE_STUB });
      const completion = OrderActions.createOrderFailure({ error: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });
      when(ordersApiServiceMock.createOrder(deepEqual({ ...ORDER_CREATE_STUB, products: [] }))).thenReturn(response);

      expect(effects.createOrder$).toBeObservable(expected);
    });
  });

  describe('createOrderSuccess$', () => {
    it('should remove customer', () => {
      actions = hot('-a-|', { a: OrderActions.createOrderSuccess({ orderDetails: ORDER_DETAILS_STUB }) });
      const expected = hot('---|');

      expect(effects.createOrderSuccess$).toBeObservable(expected);
      verify(localAsyncStorageMock.removeItem(OrderKeys.Customer)).once();
    });
  });

  describe('updateCustomer$', () => {
    it('should update customer', () => {
      actions = hot('-a-|', { a: OrderActions.updateCustomer({ customer: CUSTOMER_STUB }) });
      const expected = hot('---|');

      expect(effects.updateCustomer$).toBeObservable(expected);
      verify(localAsyncStorageMock.setItem(OrderKeys.Customer, deepEqual(CUSTOMER_STUB))).once();
    });
  });
});
