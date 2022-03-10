import { deepEqual, instance, mock, verify, when } from 'ts-mockito';

import { ApiService } from '@banshop/core/api/service';
import { ORDER_STUB } from '@banshop/orders/common';

import { ORDER_API_ROUTES, OrdersApiService } from './orders-api.service';

describe('OrdersApiService', () => {
  let service: OrdersApiService;
  let apiServiceMock: ApiService;

  beforeEach(() => {
    apiServiceMock = mock(ApiService);

    service = new OrdersApiService(instance(apiServiceMock));
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call createOrder()', () => {
    when(apiServiceMock.post<void>(ORDER_API_ROUTES.createOrder, deepEqual(ORDER_STUB))).thenReturn();

    service.createOrder(ORDER_STUB);

    verify(apiServiceMock.post(ORDER_API_ROUTES.createOrder, deepEqual(ORDER_STUB))).once();
  });
});
