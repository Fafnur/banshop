import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CartPipesModule } from '@banshop/cart/ui/pipes';
import { ProductPipesModule } from '@banshop/products/ui/pipes';
import { GridModule } from '@banshop/ui/grid';
import { MultiplatformModule } from '@banshop/ui/multiplatform';

import { CartCardComponent } from './cart-card.component';
import { CardCountModule } from './components/card-count/card-count.module';
import { CardDescriptionModule } from './components/card-description/card-description.module';
import { CardPreviewModule } from './components/card-preview/card-preview.module';
import { CardPriceModule } from './components/card-price/card-price.module';
import { CardRemoveModule } from './components/card-remove/card-remove.module';
import { CardTitleModule } from './components/card-title/card-title.module';

@NgModule({
  imports: [
    CommonModule,
    ProductPipesModule,
    MatIconModule,
    MatButtonModule,
    CardRemoveModule,
    CardCountModule,
    CardPreviewModule,
    CardTitleModule,
    CardDescriptionModule,
    CardPriceModule,
    GridModule,
    MultiplatformModule,
    CartPipesModule,
  ],
  declarations: [CartCardComponent],
  exports: [CartCardComponent],
})
export class CartCardModule {}
