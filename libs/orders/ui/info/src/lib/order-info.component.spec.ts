import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Dictionary } from '@ngrx/entity';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CART_PRODUCTS_STUB, CartProduct } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { CartPipesModule } from '@banshop/cart/ui/pipes';
import { providerOf } from '@banshop/core/testing';
import { Product, PRODUCTS_ENTITIES_STUB } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

import { OrderInfoComponent } from './order-info.component';
import { OrderInfoComponentPo } from './order-info.component.po';

describe('OrderInfoComponent', () => {
  let pageObject: OrderInfoComponentPo;
  let fixture: ComponentFixture<OrderInfoComponent>;
  let cartFacadeMock: CartFacade;
  let productFacadeMock: ProductFacade;

  let cartProducts$: ReplaySubject<CartProduct[]>;
  let productsEntities$: ReplaySubject<Dictionary<Product>>;

  beforeEach(() => {
    cartFacadeMock = mock(CartFacade);
    productFacadeMock = mock(ProductFacade);
    cartProducts$ = new ReplaySubject<CartProduct[]>(1);
    productsEntities$ = new ReplaySubject<Dictionary<Product>>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NoopAnimationsModule, MockModule(MatTableModule), MockModule(CartPipesModule)],
      declarations: [OrderInfoComponent],
      providers: [providerOf(CartFacade, cartFacadeMock), providerOf(ProductFacade, productFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(cartFacadeMock.cartProducts$).thenReturn(cartProducts$);
    when(productFacadeMock.productsEntities$).thenReturn(productsEntities$);

    fixture = TestBed.createComponent(OrderInfoComponent);
    pageObject = new OrderInfoComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    cartProducts$.next(CART_PRODUCTS_STUB);
    productsEntities$.next(PRODUCTS_ENTITIES_STUB);

    fixture.detectChanges();

    expect(pageObject.table).toBeTruthy();
  });
});
