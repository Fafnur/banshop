import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CartProduct } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { CartCardModule } from '@banshop/cart/ui/card';
import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { providerOf } from '@banshop/core/testing';

import { CartListComponent } from './cart-list.component';

/**
 * TODO: Add tests
 */
describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  let cartFacadeMock: CartFacade;

  let cartProducts$: ReplaySubject<CartProduct[]>;

  beforeEach(() => {
    cartFacadeMock = mock(CartFacade);

    cartProducts$ = new ReplaySubject<CartProduct[]>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(CartCardModule), MockModule(NavigationPipesModule)],
      declarations: [CartListComponent],
      providers: [PATHS_STUB, providerOf(CartFacade, cartFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(cartFacadeMock.cartProducts$).thenReturn(cartProducts$);

    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
