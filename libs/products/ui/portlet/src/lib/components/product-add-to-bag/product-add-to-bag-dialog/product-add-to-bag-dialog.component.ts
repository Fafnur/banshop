import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';
import { Product } from '@banshop/products/common';

@Component({
  selector: 'banshop-product-add-to-bag-dialog',
  templateUrl: './product-add-to-bag-dialog.component.html',
  styleUrls: ['./product-add-to-bag-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAddToBagDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private matData: { product: Product }, @Inject(PATHS) public readonly paths: NavigationPaths) {}

  get product(): Product {
    return this.matData.product;
  }
}
