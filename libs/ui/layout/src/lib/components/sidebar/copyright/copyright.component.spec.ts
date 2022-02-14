import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightComponent } from './copyright.component';

describe('CopyrightComponent', () => {
  let component: CopyrightComponent;
  let fixture: ComponentFixture<CopyrightComponent>;
  const YEAR_STUB = 2022;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopyrightComponent],
    }).compileComponents();
  });

  beforeEach(() => {
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

    expect(fixture.nativeElement.textContent.trim()).toBe(`© ${YEAR_STUB}`);
  });
});
