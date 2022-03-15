import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@banshop/core/testing';
import { Product, PRODUCT_STUB } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';
import { CarouselModule } from '@banshop/ui/carousel';
import { ContainerModule } from '@banshop/ui/container';
import { GridModule } from '@banshop/ui/grid';

import { ProductAddToBagModule } from './components/product-add-to-bag/product-add-to-bag.module';
import { ProductPriceModule } from './components/product-price/product-price.module';
import { ProductPromoModule } from './components/product-promo/product-promo.module';
import { ProductSizesModule } from './components/product-sizes/product-sizes.module';
import { ProductSubtitleModule } from './components/product-subtitle/product-subtitle.module';
import { ProductTitleModule } from './components/product-title/product-title.module';
import { ProductPortletComponent } from './product-portlet.component';
import { ProductPortletComponentPo } from './product-portlet.component.po';

describe('ProductPortletComponent', () => {
  let pageObject: ProductPortletComponentPo;
  let fixture: ComponentFixture<ProductPortletComponent>;
  let activatedRouteMock: ActivatedRoute;
  let productFacadeMock: ProductFacade;
  let productBySlug$: ReplaySubject<Product>;

  const SLUG = 'product-slug';

  beforeEach(() => {
    activatedRouteMock = mock(ActivatedRoute);
    productFacadeMock = mock(ProductFacade);

    productBySlug$ = new ReplaySubject<Product>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MockModule(ContainerModule),
        MockModule(CarouselModule),
        MockModule(GridModule),
        MockModule(ProductPriceModule),
        MockModule(ProductPromoModule),
        MockModule(ProductSizesModule),
        MockModule(ProductSubtitleModule),
        MockModule(ProductTitleModule),
        MockModule(ProductAddToBagModule),
      ],
      declarations: [ProductPortletComponent],
      providers: [providerOf(ActivatedRoute, activatedRouteMock), providerOf(ProductFacade, productFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(activatedRouteMock.snapshot).thenReturn({ params: { slug: SLUG } } as never);
    when(productFacadeMock.productBySlug$(SLUG)).thenReturn(productBySlug$);

    fixture = TestBed.createComponent(ProductPortletComponent);
    pageObject = new ProductPortletComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    productBySlug$.next(PRODUCT_STUB);
    fixture.detectChanges();

    expect(pageObject.carousel).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.subtitle).toBeTruthy();
    expect(pageObject.promo).toBeTruthy();
    expect(pageObject.sizes).toBeTruthy();
    expect(pageObject.addToBag).toBeTruthy();
  });
});
