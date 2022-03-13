import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductPriceComponent } from './product-price.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductPriceComponent],
  exports: [ProductPriceComponent],
})
export class ProductPriceModule {}
