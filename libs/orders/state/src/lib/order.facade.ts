import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { map } from 'rxjs';

import { Nullable } from '@banshop/core/utils/types';
import { Customer, OrderCreate } from '@banshop/orders/common';

import * as OrderActions from './order.actions';
import * as OrderSelectors from './order.selectors';

@Injectable()
export class OrderFacade {
  customer$ = this.store.select(OrderSelectors.selectCustomer);

  orderCreating$ = this.store.select(OrderSelectors.selectOrderCreating);

  createOrderSuccess$ = this.actions$.pipe(
    ofType(OrderActions.createOrderSuccess),
    map(({ orderDetails }) => orderDetails)
  );

  createOrderFailure$ = this.actions$.pipe(
    ofType(OrderActions.createOrderFailure),
    map(({ error }) => error)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  createOrder(order: OrderCreate) {
    this.dispatch(OrderActions.createOrder({ order }));
  }

  updateCustomer(customer: Nullable<Customer>) {
    this.dispatch(OrderActions.updateCustomer({ customer }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
