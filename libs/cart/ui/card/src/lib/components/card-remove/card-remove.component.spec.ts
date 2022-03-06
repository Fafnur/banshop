import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { CART_PRODUCT_STUB } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { providerOf } from '@banshop/core/testing';

import { CardRemoveComponent } from './card-remove.component';
import { CardRemoveComponentPo } from './card-remove.component.po';

describe('CartRemoveComponent', () => {
  let pageObject: CardRemoveComponentPo;
  let fixture: ComponentFixture<CardRemoveComponent>;
  let cartFacadeMock: CartFacade;

  beforeEach(() => {
    cartFacadeMock = mock(CartFacade);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NoopAnimationsModule, MockModule(MatIconModule), MockModule(MatButtonModule)],
      declarations: [CardRemoveComponent],
      providers: [providerOf(CartFacade, cartFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRemoveComponent);
    pageObject = new CardRemoveComponentPo(fixture);
    fixture.componentInstance.cartProduct = CART_PRODUCT_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.icon).toBeFalsy();
    expect(pageObject.button).toBeTruthy();
  });

  it('should call remove after click icon', () => {
    fixture.componentInstance.icon = true;
    fixture.detectChanges();

    pageObject.triggerIconClick();

    expect(pageObject.iconText).toBe('delete');
    verify(cartFacadeMock.removeProduct(deepEqual(CART_PRODUCT_STUB))).once();
  });

  it('should call remove after click button', () => {
    fixture.detectChanges();

    pageObject.triggerButtonClick();

    expect(pageObject.buttonText).toBe('Delete');
    verify(cartFacadeMock.removeProduct(deepEqual(CART_PRODUCT_STUB))).once();
  });
});
