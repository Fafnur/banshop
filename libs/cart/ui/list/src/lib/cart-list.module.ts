import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartCardModule } from '@banshop/cart/ui/card';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { CartListComponent } from './cart-list.component';

@NgModule({
  imports: [CommonModule, CartCardModule, RouterModule, NavigationPipesModule],
  declarations: [CartListComponent],
  exports: [CartListComponent],
})
export class CartListModule {}
