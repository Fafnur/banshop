import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { CartPipesModule } from '@banshop/cart/ui/pipes';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { ProductPipesModule } from '@banshop/products/ui/pipes';

import { CartInfoComponent } from './cart-info.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule, NavigationPipesModule, MatCardModule, CartPipesModule, ProductPipesModule],
  declarations: [CartInfoComponent],
  exports: [CartInfoComponent],
})
export class CartInfoModule {}
