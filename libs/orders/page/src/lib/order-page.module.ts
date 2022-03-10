import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderStateModule } from '@banshop/orders/state';
import { OrderFormModule } from '@banshop/orders/ui/form';
import { OrderInfoModule } from '@banshop/orders/ui/info';

import { OrderPageComponent } from './order-page.component';
import { OrderPageRoutingModule } from './order-page-routing.module';

@NgModule({
  imports: [CommonModule, OrderPageRoutingModule, OrderStateModule, OrderFormModule, OrderInfoModule],
  declarations: [OrderPageComponent],
})
export class OrderPageModule {}
