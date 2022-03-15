import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { MetaService } from '@banshop/core/meta/service';
import { providerOf } from '@banshop/core/testing';
import { Product, PRODUCT_STUB } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

import { ProductPageComponent } from './product-page.component';
import { ProductPageComponentPo } from './product-page.component.po';

describe('ProductPageComponent', () => {
  let pageObject: ProductPageComponentPo;
  let fixture: ComponentFixture<ProductPageComponent>;
  let activatedRouteMock: ActivatedRoute;
  let productFacadeMock: ProductFacade;
  let metaServiceMock: MetaService;
  let productBySlug$: ReplaySubject<Product>;

  const SLUG = 'product-slug';

  beforeEach(() => {
    activatedRouteMock = mock(ActivatedRoute);
    productFacadeMock = mock(ProductFacade);
    metaServiceMock = mock(MetaService);

    productBySlug$ = new ReplaySubject<Product>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, NoopAnimationsModule, MockModule(MatTabsModule)],
      declarations: [ProductPageComponent],
      providers: [
        providerOf(ActivatedRoute, activatedRouteMock),
        providerOf(ProductFacade, productFacadeMock),
        providerOf(MetaService, metaServiceMock),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    when(activatedRouteMock.snapshot).thenReturn({ params: { slug: SLUG } } as never);
    when(productFacadeMock.productBySlug$(SLUG)).thenReturn(productBySlug$);

    fixture = TestBed.createComponent(ProductPageComponent);
    pageObject = new ProductPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    productBySlug$.next(PRODUCT_STUB);
    fixture.detectChanges();

    expect(pageObject.description).toBeTruthy();
    expect(pageObject.details).toBeTruthy();
  });

  it('should call meta', () => {
    productBySlug$.next(PRODUCT_STUB);
    fixture.detectChanges();

    verify(
      metaServiceMock.update(
        deepEqual({
          title: PRODUCT_STUB.title,
          description: PRODUCT_STUB.description,
          keywords: PRODUCT_STUB.title,
        })
      )
    ).once();
  });
});
