import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPromoComponent } from './product-promo.component';

describe('ProductPromoComponent', () => {
  let component: ProductPromoComponent;
  let fixture: ComponentFixture<ProductPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPromoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPromoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
