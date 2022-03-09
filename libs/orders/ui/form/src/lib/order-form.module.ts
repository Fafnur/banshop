import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderNotifyModule } from '@banshop/orders/ui/notify';
import { GridModule } from '@banshop/ui/grid';

import { OrderFormComponent } from './order-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, GridModule, OrderNotifyModule],
  declarations: [OrderFormComponent],
  exports: [OrderFormComponent],
})
export class OrderFormModule {}
