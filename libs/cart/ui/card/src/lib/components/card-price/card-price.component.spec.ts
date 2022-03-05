import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPriceComponent } from './card-price.component';

describe('CardTitleComponent', () => {
  let component: CardPriceComponent;
  let fixture: ComponentFixture<CardPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPriceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
