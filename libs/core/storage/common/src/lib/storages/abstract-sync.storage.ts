import { SyncStorage } from '../interfaces/sync-storage.interface';

export abstract class AbstractSyncStorage implements SyncStorage {
  protected constructor(public readonly storage: Storage) {}

  get length(): number {
    return this.storage.length ?? 0;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key) ?? null;
  }

  key(index: number): string | null {
    return this.storage.key(index) ?? null;
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    try {
      this.storage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  }
}
