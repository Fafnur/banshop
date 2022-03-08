import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as OrderActions from './order.actions';
import * as OrderSelectors from './order.selectors';

@Injectable()
export class OrderFacade {
  loaded$ = this.store.select(OrderSelectors.getOrderLoaded);
  allOrder$ = this.store.select(OrderSelectors.getAllOrder);
  selectedOrder$ = this.store.select(OrderSelectors.getSelected);

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(OrderActions.init());
  }
}
