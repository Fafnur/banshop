import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { PRODUCT_STUB } from '@banshop/products/common';

import { ProductSizesComponent } from './product-sizes.component';
import { ProductSizesComponentPo } from './product-sizes.component.po';

describe('ProductSizesComponent', () => {
  let pageObject: ProductSizesComponentPo;
  let fixture: ComponentFixture<ProductSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NoopAnimationsModule, MockModule(MatButtonModule), FormExtractsModule],
      declarations: [ProductSizesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSizesComponent);
    pageObject = new ProductSizesComponentPo(fixture);
    fixture.componentInstance.sizes = PRODUCT_STUB.sizes;
    fixture.componentInstance.control = new FormControl(null, [Validators.required]);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.title).toBe('Available sizes');
    expect(pageObject.sizes).toBeTruthy();
    expect(pageObject.errorText).toBeFalsy();
    expect(pageObject.buttons.length).toBe(PRODUCT_STUB.sizes.length);
  });

  it('should show error', () => {
    fixture.detectChanges();

    pageObject.touchControl();
    fixture.detectChanges();

    expect(pageObject.errorText).toBe('Please select your size');
  });
});
