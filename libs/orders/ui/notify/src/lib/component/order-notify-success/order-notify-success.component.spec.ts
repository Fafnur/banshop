import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { ORDER_DETAILS_STUB } from '@banshop/orders/common';

import { OrderNotifySuccessComponent } from './order-notify-success.component';
import { OrderNotifySuccessComponentPo } from './order-notify-success.component.po';

describe('OrderNotifySuccessComponent', () => {
  let pageObject: OrderNotifySuccessComponentPo;
  let fixture: ComponentFixture<OrderNotifySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatDialogModule, MatButtonModule],
      declarations: [OrderNotifySuccessComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: ORDER_DETAILS_STUB,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNotifySuccessComponent);
    pageObject = new OrderNotifySuccessComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Order is processed!');
    expect(pageObject.descriptionText).toBe(
      `Your order #${ORDER_DETAILS_STUB.id} has been submitted for processing. Our manager will contact you soon. Thanks for your order!`
    );
    expect(pageObject.closeText).toBe('Close');
  });
});
