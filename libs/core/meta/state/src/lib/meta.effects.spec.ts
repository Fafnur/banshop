import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Observable, of } from 'rxjs';
import { deepEqual, mock, verify } from 'ts-mockito';

import { MetaService } from '@banshop/core/meta/service';
import { providerOf } from '@banshop/core/testing';

import { MetaEffects } from './meta.effects';

describe('MetaEffects', () => {
  let effects: MetaEffects;
  let metaServiceMock: MetaService;
  let actions$: Observable<unknown>;

  beforeEach(() => {
    metaServiceMock = mock(MetaService);

    TestBed.configureTestingModule({
      providers: [MetaEffects, provideMockActions(() => actions$), providerOf(MetaService, metaServiceMock)],
    });

    effects = TestBed.inject(MetaEffects);
  });

  it('should call setMeta', () => {
    // arrange
    actions$ = of({
      type: ROUTER_NAVIGATED,
      payload: {
        routerState: { url: '/' },
      },
    });

    // act
    effects.routerNavigated$.subscribe();

    // assert
    verify(metaServiceMock.update(deepEqual({ url: '/' }), undefined)).once();
  });
});
