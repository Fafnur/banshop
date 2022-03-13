import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { CartFacade } from '@banshop/cart/state';
import { providerOf } from '@banshop/core/testing';
import { PRODUCT_STUB } from '@banshop/products/common';

import { ProductAddToBagComponent } from './product-add-to-bag.component';
import { ProductAddToBagComponentPo } from './product-add-to-bag.component.po';
import { ProductAddToBagService } from './product-add-to-bag.service';
import { ProductAddToBagDialogModule } from './product-add-to-bag-dialog/product-add-to-bag-dialog.module';

describe('ProductAddToBagComponent', () => {
  let pageObject: ProductAddToBagComponentPo;
  let fixture: ComponentFixture<ProductAddToBagComponent>;
  let productAddToBagServiceMock: ProductAddToBagService;
  let cartFacadeMock: CartFacade;

  beforeEach(() => {
    productAddToBagServiceMock = mock(ProductAddToBagService);
    cartFacadeMock = mock(CartFacade);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NoopAnimationsModule, MockModule(MatButtonModule), MockModule(ProductAddToBagDialogModule)],
      declarations: [ProductAddToBagComponent],
      providers: [providerOf(ProductAddToBagService, productAddToBagServiceMock), providerOf(CartFacade, cartFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddToBagComponent);
    pageObject = new ProductAddToBagComponentPo(fixture);
    fixture.componentInstance.product = PRODUCT_STUB;
    fixture.componentInstance.control = new FormControl();
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.buttonText).toBe('Add to bag');
  });

  it('should call method', () => {
    pageObject.setSize(PRODUCT_STUB.sizes[0]);

    fixture.detectChanges();

    pageObject.triggerClick();

    verify(
      cartFacadeMock.addProduct(
        deepEqual({
          size: PRODUCT_STUB.sizes[0],
          productId: PRODUCT_STUB.id,
          count: 1,
        })
      )
    ).once();
    verify(productAddToBagServiceMock.open(deepEqual(PRODUCT_STUB))).once();
  });
});
