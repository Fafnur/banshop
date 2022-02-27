import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CartRemoveComponent } from './cart-remove.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [CartRemoveComponent],
  exports: [CartRemoveComponent],
})
export class CartRemoveModule {}
