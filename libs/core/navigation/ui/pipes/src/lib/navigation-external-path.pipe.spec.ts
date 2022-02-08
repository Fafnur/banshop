import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from '@banshop/core/api/service';
import { NAVIGATION_PATHS, PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';

import { NavigationExternalPathPipe } from './navigation-external-path.pipe';

describe('NavigationExternalPathPipe', () => {
  let pipe: NavigationExternalPathPipe;
  let apiService: ApiService;
  let navigationService: NavigationService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        providers: [PATHS_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    apiService = TestBed.inject(ApiService);
    navigationService = TestBed.inject(NavigationService);
    pipe = new NavigationExternalPathPipe(navigationService, apiService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return external path', () => {
    expect(pipe.transform(NAVIGATION_PATHS.product, { slug: '1234' })).toBe('/product/1234');
  });
});
