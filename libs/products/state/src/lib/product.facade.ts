import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs';

import * as ProductActions from './product.actions';
import * as ProductSelectors from './product.selectors';

@Injectable()
export class ProductFacade {
  loaded$ = this.store.select(ProductSelectors.selectLoaded);

  products$ = this.store.select(ProductSelectors.selectProducts);

  productsEntities$ = this.store.select(ProductSelectors.selectProductsEntities);

  loadSuccess$ = this.actions$.pipe(
    ofType(ProductActions.loadSuccess),
    map(({ products }) => products)
  );

  loadFailure$ = this.actions$.pipe(
    ofType(ProductActions.loadFailure),
    map(({ error }) => error)
  );

  product$ = (id: number) => this.store.select(ProductSelectors.selectProduct(id));

  productBySlug$ = (slug: string) => this.store.select(ProductSelectors.selectProductBySlug(slug));

  productBySlugLoaded$ = (slug: string) =>
    this.products$.pipe(
      filter((products) => products?.length > 0),
      switchMap(() => this.store.select(ProductSelectors.selectProductBySlug(slug)))
    );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  load(): void {
    this.store.dispatch(ProductActions.load());
  }
}
