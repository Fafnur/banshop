import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductPipesModule } from '@banshop/products/ui/pipes';

import { CartCardComponent } from './cart-card.component';

@NgModule({
  imports: [CommonModule, ProductPipesModule],
  declarations: [CartCardComponent],
  exports: [CartCardComponent],
})
export class CartCardModule {}
