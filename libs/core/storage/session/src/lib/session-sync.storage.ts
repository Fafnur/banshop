import { Injectable } from '@angular/core';

import { AbstractSyncStorage, storageAvailable } from '@banshop/core/storage/common';
import { MemoryStorage } from '@banshop/core/storage/memory';

@Injectable({
  providedIn: 'root',
})
export class SessionSyncStorage extends AbstractSyncStorage {
  constructor() {
    super(storageAvailable('sessionStorage') ? window.sessionStorage : new MemoryStorage());
  }
}
