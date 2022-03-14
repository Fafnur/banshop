import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { CartInfoModule } from '@banshop/cart/ui/info';
import { CartListModule } from '@banshop/cart/ui/list';
import { GridModule } from '@banshop/ui/grid';

import { CartPageComponent } from './cart-page.component';
import { CartPageComponentPo } from './cart-page.component.po';

describe('CartPageComponent', () => {
  let pageObject: CartPageComponentPo;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(CartListModule), MockModule(GridModule), MockModule(CartInfoModule)],
      declarations: [CartPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    pageObject = new CartPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.list).toBeTruthy();
    expect(pageObject.info).toBeTruthy();
  });
});
