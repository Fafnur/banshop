import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CartFacade } from '@banshop/cart/state';
import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';
import { Product } from '@banshop/products/common';

@Component({
  selector: 'banshop-cart-add-dialog',
  templateUrl: './cart-add-dialog.component.html',
  styleUrls: ['./cart-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartAddDialogComponent implements OnInit {
  added = false;

  constructor(
    private readonly cartFacade: CartFacade,
    @Inject(MAT_DIALOG_DATA) private matData: { product: Product },
    @Inject(PATHS) public readonly paths: NavigationPaths
  ) {}

  ngOnInit(): void {
    if (this.matData.product) {
      // sss
    }
  }

  onAdd(): void {
    this.added = true;
    // this.cartFacade.addProduct()
  }
}
