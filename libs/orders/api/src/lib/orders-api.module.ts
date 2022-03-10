import { NgModule } from '@angular/core';

import { OrdersApiService } from './orders-api.service';

@NgModule({
  providers: [OrdersApiService],
})
export class OrdersApiModule {}
