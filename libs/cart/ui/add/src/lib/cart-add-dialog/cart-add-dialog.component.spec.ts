import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAddDialogComponent } from './cart-add-dialog.component';

describe('CartAddDialogComponent', () => {
  let component: CartAddDialogComponent;
  let fixture: ComponentFixture<CartAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
