import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { OrdersApiModule } from '@banshop/orders/api';

import { OrderEffects } from './order.effects';
import { OrderFacade } from './order.facade';
import * as fromOrder from './order.reducer';

@NgModule({
  imports: [
    OrdersApiModule,
    StoreModule.forFeature(fromOrder.ORDER_FEATURE_KEY, fromOrder.reducer),
    EffectsModule.forFeature([OrderEffects]),
  ],
  providers: [OrderFacade],
})
export class OrdersStateModule {}
