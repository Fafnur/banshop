import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CartProduct } from '@banshop/cart/common';

@Component({
  selector: 'banshop-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCardComponent {
  @Input() cartProduct!: CartProduct;
}
