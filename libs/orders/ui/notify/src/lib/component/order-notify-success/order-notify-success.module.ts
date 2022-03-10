import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { OrderNotifySuccessComponent } from './order-notify-success.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [OrderNotifySuccessComponent],
  exports: [OrderNotifySuccessComponent],
})
export class OrderNotifySuccessModule {}
