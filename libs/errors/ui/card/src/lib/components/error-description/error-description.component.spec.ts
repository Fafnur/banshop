import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDescriptionComponent } from './error-description.component';

describe('ErrorDescriptionComponent', () => {
  let component: ErrorDescriptionComponent;
  let fixture: ComponentFixture<ErrorDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDescriptionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
