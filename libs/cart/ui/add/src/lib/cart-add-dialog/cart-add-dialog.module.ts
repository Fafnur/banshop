import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { CartAddDialogComponent } from './cart-add-dialog.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule, NavigationPipesModule],
  declarations: [CartAddDialogComponent],
  exports: [CartAddDialogComponent],
})
export class CartAddDialogModule {}
