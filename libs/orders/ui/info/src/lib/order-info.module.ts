import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CartPipesModule } from '@banshop/cart/ui/pipes';

import { OrderInfoComponent } from './order-info.component';

@NgModule({
  imports: [CommonModule, MatTableModule, CartPipesModule],
  declarations: [OrderInfoComponent],
  exports: [OrderInfoComponent],
})
export class OrderInfoModule {}
