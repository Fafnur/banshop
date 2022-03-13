import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductTitleComponent } from './product-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductTitleComponent],
  exports: [ProductTitleComponent],
})
export class ProductTitleModule {}
