import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartListComponent } from './cart-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartListComponent],
  exports: [CartListComponent],
})
export class CartListModule {}
