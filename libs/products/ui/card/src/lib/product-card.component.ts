import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '@banshop/products/common';

@Component({
  selector: 'banshop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product!: Product;
}
