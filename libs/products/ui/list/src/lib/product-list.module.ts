import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListModule {}
