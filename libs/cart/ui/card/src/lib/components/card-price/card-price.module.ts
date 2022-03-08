import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardPriceComponent } from './card-price.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardPriceComponent],
  exports: [CardPriceComponent],
})
export class CardPriceModule {}
