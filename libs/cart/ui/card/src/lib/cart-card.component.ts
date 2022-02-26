import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCardComponent {}
