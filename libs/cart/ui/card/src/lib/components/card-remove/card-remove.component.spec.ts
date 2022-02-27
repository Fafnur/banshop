import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRemoveComponent } from './card-remove.component';

describe('CartRemoveComponent', () => {
  let component: CardRemoveComponent;
  let fixture: ComponentFixture<CardRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRemoveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
