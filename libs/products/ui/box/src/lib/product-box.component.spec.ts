import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxComponent } from './product-box.component';

describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent;
  let fixture: ComponentFixture<ProductBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
