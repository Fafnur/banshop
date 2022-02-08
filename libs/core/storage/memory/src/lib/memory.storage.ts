import { Injectable } from '@angular/core';

import { SyncStorage } from '@banshop/core/storage/common';

@Injectable({
  providedIn: 'root',
})
export class MemoryStorage implements SyncStorage {
  private data: Record<string, unknown> = {};

  get length(): number {
    return Object.keys(this.data).length;
  }

  clear(): void {
    this.data = {};
  }

  getItem<T = unknown>(key: string): T | null {
    return key in this.data ? (this.data[key] as T) : null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.data);

    return index >= 0 && keys.length < index ? keys[index] : null;
  }

  removeItem(key: string): void {
    delete this.data[key];
  }

  setItem<T = unknown>(key: string, value: T): void {
    this.data[key] = value;
  }
}
