import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mock, when } from 'ts-mockito';

import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';
import { providerOf } from '@banshop/core/testing';

import { ServerErrorInterceptor } from './server-error.interceptor';

/**
 * TODO: Add tests
 */
describe('ServerErrorInterceptor', () => {
  let interceptor: ServerErrorInterceptor;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [ServerErrorInterceptor, providerOf(NavigationService, navigationServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);

    interceptor = TestBed.inject(ServerErrorInterceptor);
  });

  it('should create', () => {
    expect(interceptor).toBeTruthy();
  });
});
