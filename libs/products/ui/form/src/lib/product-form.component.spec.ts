import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockModule } from 'ng-mocks';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { PRODUCT_STUB } from '@banshop/products/common';
import { GridModule } from '@banshop/ui/grid';

import { ProductCountModule } from './components/product-count/product-count.module';
import { ProductSizeModule } from './components/product-size/product-size.module';
import { ProductFormComponent } from './product-form.component';
import { ProductFormComponentPo } from './product-form.component.po';

@Component({
  template: `<banshop-product-form automation-id="form" [product]="product"></banshop-product-form>`,
})
class WrapperComponent {
  product = PRODUCT_STUB;
}

describe('ProductFormComponent', () => {
  let pageObject: ProductFormComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MockModule(ProductCountModule),
        MockModule(ProductSizeModule),
        MockModule(FormExtractsModule),
        MockModule(GridModule),
      ],
      declarations: [ProductFormComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new ProductFormComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.form).toBeTruthy();
    expect(pageObject.count).toBeTruthy();
    expect(pageObject.size).toBeTruthy();
  });
});
