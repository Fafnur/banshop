import { TestBed } from '@angular/core/testing';

import { CartAddService } from './cart-add.service';

describe('CartAddService', () => {
  let service: CartAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
