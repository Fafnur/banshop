import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { CartAddService } from './cart-add.service';
import { CartAddDialogModule } from './cart-add-dialog/cart-add-dialog.module';

@NgModule({
  imports: [MatDialogModule, CartAddDialogModule],
  providers: [CartAddService],
})
export class CartAddModule {}
