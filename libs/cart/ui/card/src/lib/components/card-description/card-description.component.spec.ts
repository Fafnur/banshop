import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescriptionComponent } from './card-description.component';

describe('CardTitleComponent', () => {
  let component: CardDescriptionComponent;
  let fixture: ComponentFixture<CardDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
