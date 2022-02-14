import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLinksComponent } from './error-links.component';

describe('ErrorLinksComponent', () => {
  let component: ErrorLinksComponent;
  let fixture: ComponentFixture<ErrorLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorLinksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLinksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
