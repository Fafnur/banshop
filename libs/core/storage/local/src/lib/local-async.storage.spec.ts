import { TestBed } from '@angular/core/testing';

import { LocalAsyncStorage } from './local-async.storage';
import { LocalSyncStorage } from './local-sync.storage';

describe('LocalAsyncStorage', () => {
  let service: LocalAsyncStorage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LocalAsyncStorage, LocalSyncStorage],
    }).compileComponents();

    service = TestBed.inject(LocalAsyncStorage);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
