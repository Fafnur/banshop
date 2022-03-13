import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTitleComponent } from './product-title.component';

describe('ProductTitleComponent', () => {
  let component: ProductTitleComponent;
  let fixture: ComponentFixture<ProductTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
