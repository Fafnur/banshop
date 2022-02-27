import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ProductPipesModule } from '@banshop/products/ui/pipes';

import { CartCardComponent } from './cart-card.component';
import { CardCountModule } from './components/card-count/card-count.module';
import { CardPreviewModule } from './components/card-preview/card-preview.module';
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
  ],
  declarations: [CartCardComponent],
  exports: [CartCardComponent],
})
export class CartCardModule {}
