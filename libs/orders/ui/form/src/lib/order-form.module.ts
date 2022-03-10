import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { OrderNotifyModule } from '@banshop/orders/ui/notify';
import { GridModule } from '@banshop/ui/grid';

import { OrderActionsModule } from './components/order-actions/order-actions.module';
import { OrderAddressModule } from './components/order-address/order-address.module';
import { OrderCityModule } from './components/order-city/order-city.module';
import { OrderEmailModule } from './components/order-email/order-email.module';
import { OrderNameModule } from './components/order-name/order-name.module';
import { OrderPhoneModule } from './components/order-phone/order-phone.module';
import { OrderPostcodeModule } from './components/order-postcode/order-postcode.module';
import { OrderFormComponent } from './order-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    MatCardModule,
    MatButtonModule,
    OrderNotifyModule,
    OrderAddressModule,
    OrderCityModule,
    OrderEmailModule,
    OrderNameModule,
    OrderPhoneModule,
    OrderPostcodeModule,
    FormExtractsModule,
    OrderActionsModule,
  ],
  declarations: [OrderFormComponent],
  exports: [OrderFormComponent],
})
export class OrderFormModule {}
