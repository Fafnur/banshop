import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { WidthModule } from '@banshop/ui/width';

import { OrderPostcodeComponent } from './order-postcode.component';
import { OrderPostcodeComponentPo } from './order-postcode.component.po';

@Component({
  template: `<banshop-order-postcode automation-id="form" [control]="control"></banshop-order-postcode>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('OrderPostcodeComponent', () => {
  let pageObject: OrderPostcodeComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MockModule(MatInputModule),
        MockModule(FormExtractsModule),
        MockModule(WidthModule),
      ],
      declarations: [OrderPostcodeComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new OrderPostcodeComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.labelText).toBe('Postcode');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.form).toBeTruthy();
  });
});
