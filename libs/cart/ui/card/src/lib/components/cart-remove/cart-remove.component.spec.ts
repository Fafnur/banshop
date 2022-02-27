import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRemoveComponent } from './cart-remove.component';

describe('CartRemoveComponent', () => {
  let component: CartRemoveComponent;
  let fixture: ComponentFixture<CartRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
