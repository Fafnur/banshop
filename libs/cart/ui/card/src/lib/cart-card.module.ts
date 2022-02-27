import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ProductPipesModule } from '@banshop/products/ui/pipes';

import { CartCardComponent } from './cart-card.component';
import { CartRemoveModule } from './components/cart-remove/cart-remove.module';

@NgModule({
  imports: [CommonModule, ProductPipesModule, MatIconModule, MatButtonModule, CartRemoveModule],
  declarations: [CartCardComponent],
  exports: [CartCardComponent],
})
export class CartCardModule {}
