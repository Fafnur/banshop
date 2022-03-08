import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { ProductBoxModule } from '@banshop/products/ui/box';
import { ProductFormModule } from '@banshop/products/ui/form';

import { CartAddDialogComponent } from './cart-add-dialog.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule, NavigationPipesModule, ProductBoxModule, ProductFormModule],
  declarations: [CartAddDialogComponent],
  exports: [CartAddDialogComponent],
})
export class CartAddDialogModule {}
