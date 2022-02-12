import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, when } from 'ts-mockito';

import { EnvironmentService } from '@banshop/core/environments/service';
import { providerOf } from '@banshop/core/testing';

import { CopyrightComponent } from './copyright.component';

describe('CopyrightComponent', () => {
  let component: CopyrightComponent;
  let fixture: ComponentFixture<CopyrightComponent>;
  let environmentServiceMock: EnvironmentService;
  const BRAND_STUB = 'banshop';
  const YEAR_STUB = 2022;

  beforeEach(() => {
    environmentServiceMock = mock(EnvironmentService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopyrightComponent],
      providers: [providerOf(EnvironmentService, environmentServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(environmentServiceMock.environments).thenReturn({ brand: BRAND_STUB } as any);

    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(YEAR_STUB, 1, 1));

    fixture = TestBed.createComponent(CopyrightComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent.trim()).toBe(`© 2021-${YEAR_STUB} «${BRAND_STUB}»`);
  });
});
