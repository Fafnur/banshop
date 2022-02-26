import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {}
