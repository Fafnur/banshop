import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductSubtitleComponent } from './product-subtitle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductSubtitleComponent],
  exports: [ProductSubtitleComponent],
})
export class ProductSubtitleModule {}
