import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubtitleComponent } from './product-subtitle.component';

describe('ProductSubtitleComponent', () => {
  let component: ProductSubtitleComponent;
  let fixture: ComponentFixture<ProductSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSubtitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubtitleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
