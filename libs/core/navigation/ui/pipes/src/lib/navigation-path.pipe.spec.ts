import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NAVIGATION_PATHS, PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';

import { NavigationPathPipe } from './navigation-path.pipe';

describe('NavigationPathPipe', () => {
  let pipe: NavigationPathPipe;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        providers: [PATHS_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    pipe = new NavigationPathPipe(TestBed.inject(NavigationService));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return path', () => {
    expect(pipe.transform(NAVIGATION_PATHS.home)).toEqual('/');
  });
});
