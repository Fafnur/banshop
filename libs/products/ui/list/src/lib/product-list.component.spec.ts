import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@banshop/core/testing';
import { Product, PRODUCTS_STUB } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';
import { ProductCardModule } from '@banshop/products/ui/card';
import { GridModule } from '@banshop/ui/grid';

import { ProductListComponent } from './product-list.component';
import { ProductListComponentPo } from './product-list.component.po';

describe('ProductListComponent', () => {
  let pageObject: ProductListComponentPo;
  let fixture: ComponentFixture<ProductListComponent>;
  let productFacadeMock: ProductFacade;
  let products$: ReplaySubject<Product[]>;

  beforeEach(() => {
    productFacadeMock = mock(ProductFacade);

    products$ = new ReplaySubject<Product[]>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(ProductCardModule), MockModule(GridModule)],
      declarations: [ProductListComponent],
      providers: [providerOf(ProductFacade, productFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(productFacadeMock.products$).thenReturn(products$);

    fixture = TestBed.createComponent(ProductListComponent);
    pageObject = new ProductListComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    products$.next(PRODUCTS_STUB);
    fixture.detectChanges();

    expect(pageObject.row).toBeTruthy();
    expect(pageObject.card.length).toBe(PRODUCTS_STUB.length);
  });
});
