import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartCardComponent } from './cart-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartCardComponent],
  exports: [CartCardComponent],
})
export class CartCardModule {}
