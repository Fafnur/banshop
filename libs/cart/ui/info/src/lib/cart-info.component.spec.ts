import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CartProduct } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { CartPipesModule } from '@banshop/cart/ui/pipes';
import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { providerOf } from '@banshop/core/testing';
import { ProductPipesModule } from '@banshop/products/ui/pipes';

import { CartInfoComponent } from './cart-info.component';

/**
 * TODO: Add tests
 */
describe('CartInfoComponent', () => {
  let component: CartInfoComponent;
  let fixture: ComponentFixture<CartInfoComponent>;
  let cartFacadeMock: CartFacade;

  let cartProducts$: ReplaySubject<CartProduct[]>;

  beforeEach(() => {
    cartFacadeMock = mock(CartFacade);

    cartProducts$ = new ReplaySubject<CartProduct[]>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MockModule(MatButtonModule),
        MockModule(MatCardModule),
        MockModule(NavigationPipesModule),
        MockModule(CartPipesModule),
        MockModule(ProductPipesModule),
      ],
      declarations: [CartInfoComponent],
      providers: [PATHS_STUB, providerOf(CartFacade, cartFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(cartFacadeMock.cartProducts$).thenReturn(cartProducts$);

    fixture = TestBed.createComponent(CartInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
