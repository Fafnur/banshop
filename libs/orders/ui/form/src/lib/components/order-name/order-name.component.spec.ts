import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { WidthModule } from '@banshop/ui/width';

import { OrderNameComponent } from './order-name.component';
import { OrderNameComponentPo } from './order-name.component.po';

@Component({
  template: `<banshop-order-name automation-id="form" [control]="control"></banshop-order-name>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('OrderNameComponent', () => {
  let pageObject: OrderNameComponentPo;
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
      declarations: [OrderNameComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new OrderNameComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.labelText).toBe('Full name');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.form).toBeTruthy();
  });
});
