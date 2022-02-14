import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock, when } from 'ts-mockito';

import { EnvironmentService } from '@banshop/core/environments/service';
import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { providerOf } from '@banshop/core/testing';

import { LogoComponent } from './logo.component';
import { LogoComponentPo } from './logo.component.po';

describe('LogoComponent', () => {
  let pageObject: LogoComponentPo;
  let fixture: ComponentFixture<LogoComponent>;
  let environmentServiceMock: EnvironmentService;
  const BRAND_STUB = 'banshop';

  beforeEach(() => {
    environmentServiceMock = mock(EnvironmentService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(NavigationPipesModule)],
      declarations: [LogoComponent],
      providers: [PATHS_STUB, providerOf(EnvironmentService, environmentServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(environmentServiceMock.environments).thenReturn({ brand: BRAND_STUB } as any);

    fixture = TestBed.createComponent(LogoComponent);
    pageObject = new LogoComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.link).toBeTruthy();
    expect(pageObject.image).toBeTruthy();
    expect(pageObject.brand).toBeTruthy();
    expect(pageObject.brandText).toBe(BRAND_STUB);
  });
});
