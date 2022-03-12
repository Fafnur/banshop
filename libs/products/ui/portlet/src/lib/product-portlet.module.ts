import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule,
    CarouselModule,
    GridModule,
    ProductPriceModule,
    ProductPromoModule,
    ProductSizesModule,
    ProductSubtitleModule,
    ProductTitleModule,
    ProductAddToBagModule,
  ],
  declarations: [ProductPortletComponent],
  exports: [ProductPortletComponent],
})
export class ProductPortletModule {}
