import { TestBed } from '@angular/core/testing';

import { FormMaskService } from './form-mask.service';

describe('FormMaskService', () => {
  let service: FormMaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FormMaskService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(FormMaskService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return mask', () => {
    expect(service.getPhoneMask()).toEqual({ mask: '+0 000 000 0000' });
  });
});
