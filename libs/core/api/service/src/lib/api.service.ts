import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiRequestOptions, getApiRequestOptions } from './api.util';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly httpClient: HttpClient) {}

  makeUrl(url: string): string {
    return url.indexOf('http') === 0 ? url : url;
  }

  get<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.get<T>(this.makeUrl(url), getApiRequestOptions(options));
  }

  post<T = void>(url: string, body?: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.post<T>(this.makeUrl(url), body ?? null, getApiRequestOptions(options));
  }

  patch<T = void>(url: string, body: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.patch<T>(this.makeUrl(url), body, getApiRequestOptions(options));
  }

  put<T = void>(url: string, body: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.put<T>(this.makeUrl(url), body, getApiRequestOptions(options));
  }

  delete<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.delete<T>(this.makeUrl(url), getApiRequestOptions(options));
  }
}
