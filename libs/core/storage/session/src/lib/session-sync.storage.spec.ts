import { TestBed } from '@angular/core/testing';

import { SessionSyncStorage } from './session-sync.storage';

describe('SessionSyncStorage', () => {
  let service: SessionSyncStorage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SessionSyncStorage],
    }).compileComponents();

    service = TestBed.inject(SessionSyncStorage);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
