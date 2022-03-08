import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as OrderActions from './order.actions';
import { OrderEffects } from './order.effects';
import { OrderFacade } from './order.facade';
import { ORDER_FEATURE_KEY, OrderState, reducer } from './order.reducer';

interface TestSchema {
  order: OrderState;
}

describe('OrderFacade', () => {
  let facade: OrderFacade;
  let store: Store<TestSchema>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(ORDER_FEATURE_KEY, reducer), EffectsModule.forFeature([OrderEffects])],
        providers: [OrderFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(OrderFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allOrder$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allOrder$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadOrderSuccess` to manually update list
     */
    it('allOrder$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allOrder$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        OrderActions.loadOrderSuccess({
          order: [createOrderEntity('AAA'), createOrderEntity('BBB')],
        })
      );

      list = await readFirst(facade.allOrder$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
