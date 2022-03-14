import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { CART_PRODUCT_STUB } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { providerOf } from '@banshop/core/testing';
import { PRODUCT_STUB } from '@banshop/products/common';
import { ProductBoxModule } from '@banshop/products/ui/box';
import { ProductFormModule } from '@banshop/products/ui/form';

import { CartAddDialogComponent } from './cart-add-dialog.component';
import { CartAddDialogComponentPo } from './cart-add-dialog.component.po';

describe('CartAddDialogComponent', () => {
  let pageObject: CartAddDialogComponentPo;
  let fixture: ComponentFixture<CartAddDialogComponent>;
  let cartFacadeMock: CartFacade;

  beforeEach(() => {
    cartFacadeMock = mock(CartFacade);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MockModule(MatDialogModule),
        MockModule(MatButtonModule),
        MockModule(NavigationPipesModule),
        MockModule(ProductBoxModule),
        MockModule(ProductFormModule),
      ],
      declarations: [CartAddDialogComponent],
      providers: [
        providerOf(CartFacade, cartFacadeMock),
        PATHS_STUB,
        {
          provide: MAT_DIALOG_DATA,
          useValue: { product: PRODUCT_STUB },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddDialogComponent);
    pageObject = new CartAddDialogComponentPo(fixture);
    fixture.componentInstance.form = new FormGroup({
      productId: new FormControl(PRODUCT_STUB.id, [Validators.required]),
      size: new FormControl(null, [Validators.required]),
      count: new FormControl(1, [Validators.required]),
    });
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Add to Cart');
    expect(pageObject.box).toBeTruthy();
    expect(pageObject.form).toBeTruthy();
    expect(pageObject.nextTitleText).toBeFalsy();
    expect(pageObject.nextDescriptionText).toBeFalsy();
    expect(pageObject.cancel).toBeTruthy();
    expect(pageObject.add).toBeTruthy();
    expect(pageObject.continue).toBeNull();
    expect(pageObject.cart).toBeNull();
  });

  it('should show after add', () => {
    pageObject.setForm(CART_PRODUCT_STUB);
    fixture.detectChanges();

    pageObject.triggerAddClick();
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Add to Cart');
    expect(pageObject.box).toBeFalsy();
    expect(pageObject.form).toBeFalsy();
    expect(pageObject.nextTitleText).toBeTruthy();
    expect(pageObject.nextDescriptionText).toBeTruthy();
    expect(pageObject.cancel).toBeNull();
    expect(pageObject.add).toBeNull();
    expect(pageObject.continue).toBeTruthy();
    expect(pageObject.cart).toBeTruthy();
  });

  it('should call method', () => {
    pageObject.setForm(CART_PRODUCT_STUB);
    fixture.detectChanges();

    pageObject.triggerAddClick();
    fixture.detectChanges();

    verify(cartFacadeMock.addProduct(deepEqual(CART_PRODUCT_STUB))).once();
  });
});
