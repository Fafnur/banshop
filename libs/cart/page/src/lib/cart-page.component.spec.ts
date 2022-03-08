import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { CartInfoModule } from '@banshop/cart/ui/info';
import { CartListModule } from '@banshop/cart/ui/list';
import { GridModule } from '@banshop/ui/grid';

import { CartPageComponent } from './cart-page.component';

/**
 * TODO: Add tests
 */
describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(CartListModule), MockModule(GridModule), MockModule(CartInfoModule)],
      declarations: [CartPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
