import { TestBed } from '@angular/core/testing';

import { SessionAsyncStorage } from './session-async.storage';
import { SessionSyncStorage } from './session-sync.storage';

describe('SessionAsyncStorage', () => {
  let service: SessionAsyncStorage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SessionAsyncStorage, SessionSyncStorage],
    }).compileComponents();

    service = TestBed.inject(SessionAsyncStorage);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
