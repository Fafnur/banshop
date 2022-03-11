import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, when } from 'ts-mockito';

import { ENVIRONMENTS_DEFAULT, EnvironmentService } from '@banshop/core/environments/service';
import { providerOf } from '@banshop/core/testing';

import { TermsPageComponent } from './terms-page.component';

describe('TermsPageComponent', () => {
  let component: TermsPageComponent;
  let fixture: ComponentFixture<TermsPageComponent>;
  let environmentServiceMock: EnvironmentService;

  beforeEach(() => {
    environmentServiceMock = mock(EnvironmentService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [TermsPageComponent],
      providers: [providerOf(EnvironmentService, environmentServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(environmentServiceMock.environments).thenReturn(ENVIRONMENTS_DEFAULT);

    fixture = TestBed.createComponent(TermsPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
