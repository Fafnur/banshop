import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { cold } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CART_PRODUCTS_STUB, CartProduct } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';
import { providerOf } from '@banshop/core/testing';

import { OrderGuard } from './order.guard';

describe('OrderGuard', () => {
  let guard: OrderGuard;
  let navigationServiceMock: NavigationService;
  let cartFacadeMock: CartFacade;
  let cartProducts$: ReplaySubject<CartProduct[]>;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    cartFacadeMock = mock(CartFacade);

    cartProducts$ = new ReplaySubject<CartProduct[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [OrderGuard, providerOf(NavigationService, navigationServiceMock), providerOf(CartFacade, cartFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    when(cartFacadeMock.cartProducts$).thenReturn(cartProducts$);
    guard = TestBed.inject(OrderGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true', () => {
    cartProducts$.next(CART_PRODUCTS_STUB);

    expect(guard.canActivate()).toBeObservable(cold('a', { a: true }));
  });

  it('should return true', () => {
    cartProducts$.next([]);

    const urlTree = {} as UrlTree;
    when(navigationServiceMock.createUrlTree(NAVIGATION_PATHS.home)).thenReturn(urlTree);
    expect(guard.canActivate()).toBeObservable(cold('a', { a: urlTree }));
  });
});
