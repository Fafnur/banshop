import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import * as ProductActions from './product.actions';
import * as ProductSelectors from './product.selectors';

@Injectable()
export class ProductFacade {
  loaded$ = this.store.select(ProductSelectors.selectLoaded);

  products$ = this.store.select(ProductSelectors.selectProducts);

  loadSuccess$ = this.actions$.pipe(
    ofType(ProductActions.loadSuccess),
    map(({ products }) => products)
  );

  loadFailure$ = this.actions$.pipe(
    ofType(ProductActions.loadFailure),
    map(({ error }) => error)
  );

  product$ = (id: number) => this.store.select(ProductSelectors.selectProduct(id));

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  load(): void {
    this.store.dispatch(ProductActions.load());
  }
}
