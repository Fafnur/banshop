import { Injectable } from '@angular/core';

import { AbstractAsyncStorage } from '@banshop/core/storage/common';

import { SessionSyncStorage } from './session-sync.storage';

@Injectable({
  providedIn: 'root',
})
export class SessionAsyncStorage extends AbstractAsyncStorage {
  constructor(private readonly localSyncStorage: SessionSyncStorage) {
    super(localSyncStorage);
  }
}
