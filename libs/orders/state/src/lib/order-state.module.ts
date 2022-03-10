import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { OrdersApiModule } from '@banshop/orders/api';

import { OrderEffects } from './order.effects';
import { OrderFacade } from './order.facade';
import { ORDER_FEATURE_KEY, reducer } from './order.reducer';

@NgModule({
  imports: [OrdersApiModule, StoreModule.forFeature(ORDER_FEATURE_KEY, reducer), EffectsModule.forFeature([OrderEffects])],
  providers: [OrderFacade],
})
export class OrderStateModule {}
