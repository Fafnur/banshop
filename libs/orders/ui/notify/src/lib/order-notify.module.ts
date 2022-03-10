import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { OrderNotifyFailureModule } from './component/order-notify-failure/order-notify-failure.module';
import { OrderNotifySuccessModule } from './component/order-notify-success/order-notify-success.module';
import { OrderNotifyService } from './order-notify.service';

@NgModule({
  imports: [MatDialogModule, OrderNotifySuccessModule, OrderNotifyFailureModule],
  providers: [OrderNotifyService],
})
export class OrderNotifyModule {}
