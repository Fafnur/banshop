import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '@banshop/products/common';

@Component({
  selector: 'banshop-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductBoxComponent {
  @Input() product!: Product;
}
