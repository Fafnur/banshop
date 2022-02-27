import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductCountModule } from '@banshop/products/ui/form';

import { CardCountComponent } from './card-count.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ProductCountModule],
  declarations: [CardCountComponent],
  exports: [CardCountComponent],
})
export class CardCountModule {}
