import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNotifySuccessComponent } from './order-notify-success.component';

describe('OrderNotifySuccessComponent', () => {
  let component: OrderNotifySuccessComponent;
  let fixture: ComponentFixture<OrderNotifySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderNotifySuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNotifySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
