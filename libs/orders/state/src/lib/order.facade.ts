import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { OrderCreate } from '@banshop/orders/common';

import * as OrderActions from './order.actions';
import * as OrderSelectors from './order.selectors';

@Injectable()
export class OrderFacade {
  customer$ = this.store.select(OrderSelectors.selectCustomer);

  orderCreating$ = this.store.select(OrderSelectors.selectOrderCreating);

  constructor(private readonly store: Store) {}

  createOrder(order: OrderCreate) {
    this.dispatch(OrderActions.createOrder({ order }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
