import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderStateModule } from '@banshop/orders/state';
import { OrderFormModule } from '@banshop/orders/ui/form';

import { OrderPageComponent } from './order-page.component';
import { OrderPageRoutingModule } from './order-page-routing.module';

@NgModule({
  imports: [CommonModule, OrderPageRoutingModule, OrderStateModule, OrderFormModule],
  declarations: [OrderPageComponent],
})
export class OrderPageModule {}
