import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor(@Inject(DOCUMENT) public readonly document: Document) {}

  get window(): Window | null {
    return this.document.defaultView;
  }
}
