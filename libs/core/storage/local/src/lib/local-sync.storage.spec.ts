import { TestBed } from '@angular/core/testing';

import { LocalSyncStorage } from './local-sync.storage';

describe('LocalSyncStorage', () => {
  let service: LocalSyncStorage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LocalSyncStorage],
    }).compileComponents();

    service = TestBed.inject(LocalSyncStorage);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
