import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-order-actions',
  templateUrl: './order-actions.component.html',
  styleUrls: ['./order-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderActionsComponent {}
