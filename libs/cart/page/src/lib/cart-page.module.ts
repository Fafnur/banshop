import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartInfoModule } from '@banshop/cart/ui/info';
import { CartListModule } from '@banshop/cart/ui/list';
import { GridModule } from '@banshop/ui/grid';

import { CartPageComponent } from './cart-page.component';
import { CartPageRoutingModule } from './cart-page-routing.module';

@NgModule({
  imports: [CommonModule, CartPageRoutingModule, CartListModule, GridModule, CartInfoModule],
  declarations: [CartPageComponent],
})
export class CartPageModule {}
