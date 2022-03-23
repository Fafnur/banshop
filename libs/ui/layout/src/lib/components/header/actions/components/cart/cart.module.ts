import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { CartComponent } from './cart.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationPipesModule, MatButtonModule, MatIconModule, MatBadgeModule],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartModule {}
