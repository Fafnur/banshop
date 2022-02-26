import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { CartAddModule } from '@banshop/cart/ui/add';
import { ProductPipesModule } from '@banshop/products/ui/pipes';
import { CarouselModule } from '@banshop/ui/carousel';

import { PriceModule } from './price/price.module';
import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    ProductPipesModule,
    CartAddModule,
    PriceModule,
  ],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
