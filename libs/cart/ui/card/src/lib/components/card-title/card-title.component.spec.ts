import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleComponent } from './card-title.component';

describe('CardTitleComponent', () => {
  let component: CardTitleComponent;
  let fixture: ComponentFixture<CardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
