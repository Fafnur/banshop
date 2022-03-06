import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { CART_PRODUCT_STUB } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { providerOf } from '@banshop/core/testing';
import { ProductCountModule } from '@banshop/products/ui/form';

import { CardCountComponent } from './card-count.component';
import { CardCountComponentPo } from './card-count.component.po';

describe('CardCountComponent', () => {
  let pageObject: CardCountComponentPo;
  let fixture: ComponentFixture<CardCountComponent>;
  let cartFacadeMock: CartFacade;

  beforeEach(() => {
    cartFacadeMock = mock(CartFacade);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(ProductCountModule)],
      declarations: [CardCountComponent],
      providers: [providerOf(CartFacade, cartFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCountComponent);
    pageObject = new CardCountComponentPo(fixture);
    fixture.componentInstance.cartProduct = CART_PRODUCT_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.count).toBeTruthy();
  });

  it('should call after change', () => {
    fixture.detectChanges();

    const count = 10;
    pageObject.changeControl(count);

    verify(cartFacadeMock.changeProduct(deepEqual({ ...CART_PRODUCT_STUB, count }))).once();
  });
});
