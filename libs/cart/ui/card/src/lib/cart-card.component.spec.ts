import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCardComponent } from './cart-card.component';

describe('CartCardComponent', () => {
  let component: CartCardComponent;
  let fixture: ComponentFixture<CartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
