import { Observable } from 'rxjs';

export interface AsyncStorage {
  readonly storage: Storage;

  getItem<T>(key: string): Observable<T | null>;
  getItems<T extends unknown[] = unknown[]>(keys: string[]): Observable<T>;
  setItem<T>(key: string, value: T): void;
  setItems<T extends Record<string, unknown> = Record<string, unknown>>(state: T): void;
  removeItem(key: string): void;
  removeItems(keys: string[]): void;
  clear(): void;
}
