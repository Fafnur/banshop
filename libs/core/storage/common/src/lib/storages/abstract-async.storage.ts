import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncStorage } from '../interfaces/async-storage.interface';

export const STORAGE_KEY = 'BANSHOP_STORAGE';

export abstract class AbstractAsyncStorage implements AsyncStorage {
  protected readonly state$!: BehaviorSubject<Record<string, unknown>>;

  protected constructor(public readonly storage: Storage, protected readonly key: string = STORAGE_KEY) {
    this.state$ = new BehaviorSubject<Record<string, unknown>>(this.getLocalState());
  }

  get state(): Record<string, unknown> {
    return this.state$.getValue();
  }

  get length(): number {
    return Object.keys(this.state).length;
  }

  clear(): void {
    this.setState({});
  }

  getItem<T = unknown>(key: string): Observable<T | null> {
    return this.state$.pipe(map((state) => (state[key] as T) ?? null));
  }

  getItems<T extends unknown[] = unknown[]>(keys: string[]): Observable<T> {
    return combineLatest(keys.map((key) => this.getItem(key))) as Observable<T>;
  }

  removeItem(key: string): void {
    const state = { ...this.state };
    if (key in state) {
      delete state[key];

      this.setState(state);
    }
  }

  removeItems(keys: string[]): void {
    const state = { ...this.state };

    for (const key of keys) {
      if (key in state) {
        delete state[key];
      }
    }

    this.setState(state);
  }

  setItem<T = unknown>(key: string, value: T): void {
    this.setState({ ...this.state$.getValue(), [key]: value });
  }

  setItems<T extends Record<string, unknown> = Record<string, unknown>>(state: T): void {
    this.setState({ ...this.state$.getValue(), ...state });
  }

  protected setState(state: Record<string, unknown>): void {
    this.state$.next(state);
    this.setLocalState(state);
  }

  protected setLocalState(state: Record<string, unknown>): void {
    try {
      this.storage.setItem(this.key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }

  protected getLocalState(): Record<string, unknown> {
    const state = this.storage.getItem(this.key);

    return state ? JSON.parse(state) : {};
  }
}
