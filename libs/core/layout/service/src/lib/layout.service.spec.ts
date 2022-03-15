import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { cold } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { deepEqual, instance, mock, when } from 'ts-mockito';

import { LAYOUT_TYPES, LayoutService } from './layout.service';

describe('LayoutService', () => {
  let breakpointObserverMock: BreakpointObserver;
  let service: LayoutService;
  let observe$: ReplaySubject<BreakpointState>;

  beforeEach(() => {
    breakpointObserverMock = mock(BreakpointObserver);
    observe$ = new ReplaySubject<BreakpointState>(1);

    when(breakpointObserverMock.observe(deepEqual(LAYOUT_TYPES))).thenReturn(observe$);
  });

  beforeEach(() => {
    service = new LayoutService(instance(breakpointObserverMock));
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct handset types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.Handset]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Handset }));
    expect(service.is(Breakpoints.Handset)).toBeTruthy();
  });

  it('should return correct HandsetPortrait types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.HandsetPortrait]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Handset }));
    expect(service.is(Breakpoints.Handset)).toBeTruthy();
  });

  it('should return correct HandsetLandscape types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.HandsetLandscape]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Handset }));
    expect(service.is(Breakpoints.Handset)).toBeTruthy();
  });

  it('should return correct tablet types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.Tablet]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Tablet }));
    expect(service.is(Breakpoints.Tablet)).toBeTruthy();
  });

  it('should return correct TabletPortrait types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.TabletPortrait]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Tablet }));
    expect(service.is(Breakpoints.Tablet)).toBeTruthy();
  });

  it('should return correct TabletLandscape types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.TabletLandscape]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Tablet }));
  });

  it('should return correct web types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.Web]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Web }));
    expect(service.is(Breakpoints.Web)).toBeTruthy();
  });

  it('should return correct WebPortrait types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.WebPortrait]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Web }));
    expect(service.is(Breakpoints.Web)).toBeTruthy();
  });

  it('should return correct WebLandscape types', () => {
    observe$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.WebLandscape]: true,
      },
    });
    expect(service.layoutType$).toBeObservable(cold('a', { a: Breakpoints.Web }));
    expect(service.is(Breakpoints.Web)).toBeTruthy();
  });
});
