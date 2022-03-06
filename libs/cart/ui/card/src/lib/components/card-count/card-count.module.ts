import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCountModule } from '@banshop/products/ui/form';

import { CardCountComponent } from './card-count.component';

@NgModule({
  imports: [CommonModule, ProductCountModule],
  declarations: [CardCountComponent],
  exports: [CardCountComponent],
})
export class CardCountModule {}
