import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as OrderActions from './order.actions';
import { OrderEffects } from './order.effects';

describe('OrderEffects', () => {
  let actions: Observable<Action>;
  let effects: OrderEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [OrderEffects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(OrderEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: OrderActions.init() });

      const expected = hot('-a-|', { a: OrderActions.loadOrderSuccess({ order: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
