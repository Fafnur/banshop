import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { CartFacade } from '@banshop/cart/state';
import { Product } from '@banshop/products/common';

import { ProductAddToBagService } from './product-add-to-bag.service';

@Component({
  selector: 'banshop-product-add-to-bag',
  templateUrl: './product-add-to-bag.component.html',
  styleUrls: ['./product-add-to-bag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAddToBagComponent {
  @Input() product!: Product;
  @Input() control!: UntypedFormControl;

  constructor(private readonly cartFacade: CartFacade, private readonly productAddToBagService: ProductAddToBagService) {}

  onClick(): void {
    this.control.markAllAsTouched();

    if (this.control.valid) {
      this.cartFacade.addProduct({
        size: this.control.value,
        productId: this.product.id,
        count: 1,
      });
      this.productAddToBagService.open(this.product);
    }
  }
}
