import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { WidthModule } from '@banshop/ui/width';

import { ProductSizeComponent } from './product-size.component';
import { ProductSizeComponentPo } from './product-size.component.po';

@Component({
  template: `<banshop-product-size automation-id="form" [control]="control" [sizes]="sizes"></banshop-product-size>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
  sizes = [1, 2, 3, 4];
}

describe('ProductSizeComponent', () => {
  let pageObject: ProductSizeComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MockModule(MatInputModule),
        MockModule(WidthModule),
        MockModule(MatSelectModule),
        MockModule(FormExtractsModule),
      ],
      declarations: [ProductSizeComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new ProductSizeComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.labelText).toBe('Size');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
  });
});
