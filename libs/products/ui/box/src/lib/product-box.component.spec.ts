import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { PRODUCT_STUB } from '@banshop/products/common';
import { CarouselModule } from '@banshop/ui/carousel';
import { GridModule } from '@banshop/ui/grid';

import { ProductBoxComponent } from './product-box.component';
import { ProductBoxComponentPo } from './product-box.component.po';

describe('ProductBoxComponent', () => {
  let pageObject: ProductBoxComponentPo;
  let fixture: ComponentFixture<ProductBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(GridModule), MockModule(CarouselModule)],
      declarations: [ProductBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoxComponent);
    pageObject = new ProductBoxComponentPo(fixture);
    fixture.componentInstance.product = PRODUCT_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.carousel).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.subtitle).toBeTruthy();
    expect(pageObject.description).toBeTruthy();
  });
});
