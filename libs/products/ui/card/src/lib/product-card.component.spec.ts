import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock, when } from 'ts-mockito';

import { CartAddModule, CartAddService } from '@banshop/cart/ui/add';
import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';
import { providerOf } from '@banshop/core/testing';
import { PRODUCT_STUB } from '@banshop/products/common';
import { ProductPipesModule } from '@banshop/products/ui/pipes';
import { CarouselModule } from '@banshop/ui/carousel';

import { PriceModule } from './price/price.module';
import { ProductCardComponent } from './product-card.component';
import { ProductCardComponentPo } from './product-card.component.po';

describe('ProductCardComponent', () => {
  let pageObject: ProductCardComponentPo;
  let fixture: ComponentFixture<ProductCardComponent>;
  let cartAddServiceMock: CartAddService;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    cartAddServiceMock = mock(CartAddService);
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        RouterTestingModule,
        MockModule(MatCardModule),
        MockModule(MatButtonModule),
        MockModule(MatIconModule),
        MockModule(CarouselModule),
        MockModule(ProductPipesModule),
        MockModule(CartAddModule),
        MockModule(PriceModule),
      ],
      declarations: [ProductCardComponent],
      providers: [providerOf(CartAddService, cartAddServiceMock), providerOf(NavigationService, navigationServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);

    fixture = TestBed.createComponent(ProductCardComponent);
    pageObject = new ProductCardComponentPo(fixture);
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
    expect(pageObject.details).toBeTruthy();
    expect(pageObject.buy).toBeTruthy();
  });
});
