import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { WidthModule } from '@banshop/ui/width';

import { ProductCountComponent } from './product-count.component';
import { ProductCountComponentPo } from './product-count.component.po';

@Component({
  template: `<banshop-product-count automation-id="form" [control]="control"></banshop-product-count>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('ProductCountComponent', () => {
  let pageObject: ProductCountComponentPo;
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
      declarations: [ProductCountComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new ProductCountComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.labelText).toBe('Counts');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
  });
});
