import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartPageComponent } from './cart-page.component';
import { CartPageRoutingModule } from './cart-page-routing.module';

@NgModule({
  imports: [CommonModule, CartPageRoutingModule],
  declarations: [CartPageComponent],
})
export class CartPageModule {}
