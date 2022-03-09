import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNotifyFailureComponent } from './order-notify-failure.component';

describe('OrderNotifyFaulireComponent', () => {
  let component: OrderNotifyFailureComponent;
  let fixture: ComponentFixture<OrderNotifyFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderNotifyFailureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNotifyFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
