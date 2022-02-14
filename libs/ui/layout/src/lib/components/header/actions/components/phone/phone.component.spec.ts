import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, when } from 'ts-mockito';

import { EnvironmentService } from '@banshop/core/environments/service';
import { providerOf } from '@banshop/core/testing';

import { PhoneComponent } from './phone.component';
import { PhonePipe } from './phone.pipe';

describe('PhoneComponent', () => {
  let component: PhoneComponent;
  let fixture: ComponentFixture<PhoneComponent>;
  let environmentServiceMock: EnvironmentService;

  beforeEach(() => {
    environmentServiceMock = mock(EnvironmentService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneComponent, PhonePipe],
      providers: [providerOf(EnvironmentService, environmentServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(environmentServiceMock.environments).thenReturn({ phone: '88002004444' } as any);

    fixture = TestBed.createComponent(PhoneComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent.trim()).toBe('8 800 200 4444');
  });
});
