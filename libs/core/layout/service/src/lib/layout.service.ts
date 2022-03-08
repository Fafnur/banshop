import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export const LAYOUT_SHORT_TYPES_MAP = {
  [Breakpoints.Handset]: Breakpoints.Handset,
  [Breakpoints.HandsetPortrait]: Breakpoints.Handset,
  [Breakpoints.HandsetLandscape]: Breakpoints.Handset,
  [Breakpoints.Tablet]: Breakpoints.Tablet,
  [Breakpoints.TabletPortrait]: Breakpoints.Tablet,
  [Breakpoints.TabletLandscape]: Breakpoints.Tablet,
  [Breakpoints.Web]: Breakpoints.Web,
  [Breakpoints.WebPortrait]: Breakpoints.Web,
  [Breakpoints.WebLandscape]: Breakpoints.Web,
};

export const LAYOUT_TYPES = [Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web];

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly layoutSubject$ = new BehaviorSubject<string>(Breakpoints.Handset);

  get layoutType$(): Observable<string> {
    return this.layoutSubject$.asObservable();
  }

  get snapshotLayoutType(): string {
    return this.layoutSubject$.value;
  }

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(LAYOUT_TYPES)
      .pipe(
        tap((result) => {
          let type;
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              type = LAYOUT_SHORT_TYPES_MAP[query];
              break;
            }
          }

          this.layoutSubject$.next(type ?? Breakpoints.Handset);
        })
      )
      .subscribe();
  }

  is(size: string): boolean {
    return size === this.snapshotLayoutType;
  }
}
