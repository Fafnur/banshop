import { TestBed } from '@angular/core/testing';

import { OrderNotifyService } from './order-notify.service';

describe('OrderNotifyService', () => {
  let service: OrderNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
