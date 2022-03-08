import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CartProduct } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';

@Component({
  selector: 'banshop-cart-remove',
  templateUrl: './card-remove.component.html',
  styleUrls: ['./card-remove.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardRemoveComponent {
  @Input() cartProduct!: CartProduct;
  @Input() icon = false;

  constructor(private readonly cartFacade: CartFacade) {}

  onRemove(): void {
    this.cartFacade.removeProduct(this.cartProduct);
  }
}
