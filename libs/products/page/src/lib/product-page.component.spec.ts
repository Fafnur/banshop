import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { MetaService } from '@banshop/core/meta/service';
import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';
import { providerOf } from '@banshop/core/testing';
import { Product } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';
import { CarouselModule } from '@banshop/ui/carousel';

import { ProductPageComponent } from './product-page.component';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let activatedRouteMock: ActivatedRoute;
  let productFacadeMock: ProductFacade;
  let navigationServiceMock: NavigationService;
  let metaServiceMock: MetaService;
  let productBySlug$: ReplaySubject<Product>;

  const SLUG = 'product-slug';

  beforeEach(() => {
    activatedRouteMock = mock(ActivatedRoute);
    productFacadeMock = mock(ProductFacade);
    navigationServiceMock = mock(NavigationService);
    metaServiceMock = mock(MetaService);

    productBySlug$ = new ReplaySubject<Product>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MockModule(MatCardModule),
        MockModule(MatButtonModule),
        MockModule(MatIconModule),
        MockModule(CarouselModule),
      ],
      declarations: [ProductPageComponent],
      providers: [
        providerOf(ActivatedRoute, activatedRouteMock),
        providerOf(ProductFacade, productFacadeMock),
        providerOf(NavigationService, navigationServiceMock),
        providerOf(MetaService, metaServiceMock),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    when(activatedRouteMock.snapshot).thenReturn({ params: { slug: SLUG } } as never);
    when(productFacadeMock.productBySlug$(SLUG)).thenReturn(productBySlug$);
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
