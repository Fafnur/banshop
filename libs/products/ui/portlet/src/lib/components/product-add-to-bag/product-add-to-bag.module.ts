import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ProductAddToBagComponent } from './product-add-to-bag.component';
import { ProductAddToBagService } from './product-add-to-bag.service';
import { ProductAddToBagDialogModule } from './product-add-to-bag-dialog/product-add-to-bag-dialog.module';

@NgModule({
  imports: [CommonModule, MatButtonModule, ProductAddToBagDialogModule],
  declarations: [ProductAddToBagComponent],
  exports: [ProductAddToBagComponent],
  providers: [ProductAddToBagService],
})
export class ProductAddToBagModule {}
