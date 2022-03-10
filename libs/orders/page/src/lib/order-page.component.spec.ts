import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { OrderFormModule } from '@banshop/orders/ui/form';
import { OrderInfoModule } from '@banshop/orders/ui/info';

import { OrderPageComponent } from './order-page.component';
import { OrderPageComponentPo } from './order-page.component.po';

describe('OrderPageComponent', () => {
  let pageObject: OrderPageComponentPo;
  let fixture: ComponentFixture<OrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(OrderFormModule), MockModule(OrderInfoModule)],
      declarations: [OrderPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageComponent);
    pageObject = new OrderPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Making an order');
    expect(pageObject.form).toBeTruthy();
    expect(pageObject.info).toBeTruthy();
  });
});
