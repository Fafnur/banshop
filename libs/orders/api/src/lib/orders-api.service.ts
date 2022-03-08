import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banshop/core/api/service';
import { Order } from '@banshop/orders/common';

export const ORDER_API_ROUTES = {
  createOrder: '/api/order',
};

@Injectable()
export class OrdersApiService {
  constructor(private readonly apiService: ApiService) {}

  createOrder(order: Order): Observable<void> {
    return this.apiService.post<void>(ORDER_API_ROUTES.createOrder, order);
  }
}
