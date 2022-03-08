import { Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule, MockPipe } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CART_PRODUCT_STUB } from '@banshop/cart/common';
import { CartPipesModule } from '@banshop/cart/ui/pipes';
import { LayoutService } from '@banshop/core/layout/service';
import { providerOf } from '@banshop/core/testing';
import { PRODUCT_STUB } from '@banshop/products/common';
import { ProductByIdPipe } from '@banshop/products/ui/pipes';
import { GridModule } from '@banshop/ui/grid';
import { MultiplatformModule } from '@banshop/ui/multiplatform';

import { CartCardComponent } from './cart-card.component';
import { CartCardComponentPo } from './cart-card.component.po';
import { CardCountModule } from './components/card-count/card-count.module';
import { CardDescriptionModule } from './components/card-description/card-description.module';
import { CardPreviewModule } from './components/card-preview/card-preview.module';
import { CardPriceModule } from './components/card-price/card-price.module';
import { CardRemoveModule } from './components/card-remove/card-remove.module';
import { CardTitleModule } from './components/card-title/card-title.module';

describe('CartCardComponent', () => {
  let pageObject: CartCardComponentPo;
  let fixture: ComponentFixture<CartCardComponent>;
  let layoutServiceMock: LayoutService;
  let layoutType$: BehaviorSubject<string>;

  beforeEach(() => {
    layoutServiceMock = mock(LayoutService);

    layoutType$ = new BehaviorSubject<string>(Breakpoints.Handset);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MultiplatformModule,
        MockModule(CardRemoveModule),
        MockModule(CardCountModule),
        MockModule(CardPreviewModule),
        MockModule(CardTitleModule),
        MockModule(CardDescriptionModule),
        MockModule(CardPriceModule),
        MockModule(GridModule),
        MockModule(CartPipesModule),
      ],
      declarations: [CartCardComponent, MockPipe(ProductByIdPipe, () => of(PRODUCT_STUB))],
      providers: [providerOf(LayoutService, layoutServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(layoutServiceMock.layoutType$).thenReturn(layoutType$);

    fixture = TestBed.createComponent(CartCardComponent);
    pageObject = new CartCardComponentPo(fixture);
    fixture.componentInstance.cartProduct = CART_PRODUCT_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show handset', () => {
    fixture.detectChanges();

    expect(pageObject.handset.length).toBe(5);
    expect(pageObject.tablet.length).toBe(0);
    expect(pageObject.web.length).toBe(0);
  });

  it('should show tablet', () => {
    layoutType$.next(Breakpoints.Tablet);
    fixture.detectChanges();

    expect(pageObject.handset.length).toBe(0);
    expect(pageObject.tablet.length).toBe(6);
    expect(pageObject.web.length).toBe(0);
  });

  it('should show web', () => {
    layoutType$.next(Breakpoints.Web);
    fixture.detectChanges();

    expect(pageObject.handset.length).toBe(0);
    expect(pageObject.tablet.length).toBe(0);
    expect(pageObject.web.length).toBe(7);
  });
});
