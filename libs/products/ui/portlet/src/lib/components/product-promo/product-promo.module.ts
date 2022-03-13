import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductPromoComponent } from './product-promo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductPromoComponent],
  exports: [ProductPromoComponent],
})
export class ProductPromoModule {}
