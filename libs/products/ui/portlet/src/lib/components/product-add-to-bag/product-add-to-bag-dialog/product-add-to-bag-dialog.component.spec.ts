import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock } from 'ts-mockito';

import { CartFacade } from '@banshop/cart/state';
import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { providerOf } from '@banshop/core/testing';
import { PRODUCT_STUB } from '@banshop/products/common';

import { ProductAddToBagDialogComponent } from './product-add-to-bag-dialog.component';
import { ProductAddToBagDialogComponentPo } from './product-add-to-bag-dialog.component.po';

describe('ProductAddToBagDialogComponent', () => {
  let pageObject: ProductAddToBagDialogComponentPo;
  let fixture: ComponentFixture<ProductAddToBagDialogComponent>;
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
      ],
      declarations: [ProductAddToBagDialogComponent],
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
    fixture = TestBed.createComponent(ProductAddToBagDialogComponent);
    pageObject = new ProductAddToBagDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show after add', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Add to cart');
    expect(pageObject.nextTitleText).toBeTruthy();
    expect(pageObject.nextDescriptionText).toBeTruthy();
    expect(pageObject.continue).toBeTruthy();
    expect(pageObject.cart).toBeTruthy();
  });
});
