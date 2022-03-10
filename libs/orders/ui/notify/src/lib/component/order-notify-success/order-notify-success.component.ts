import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { OrderDetails } from '@banshop/orders/common';

@Component({
  selector: 'banshop-order-notify-success',
  templateUrl: './order-notify-success.component.html',
  styleUrls: ['./order-notify-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderNotifySuccessComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly matData: OrderDetails) {}
}
