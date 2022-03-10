import { NgModule } from '@angular/core';

import { OrderGuard } from './order.guard';

@NgModule({
  providers: [OrderGuard],
})
export class OrderGuardsModule {}
