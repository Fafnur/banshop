import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
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
export class CartAddDialogComponent {
  added = false;

  form!: UntypedFormGroup;

  constructor(
    private readonly cartFacade: CartFacade,
    @Inject(MAT_DIALOG_DATA) private matData: { product: Product },
    @Inject(PATHS) public readonly paths: NavigationPaths
  ) {}

  get product(): Product {
    return this.matData.product;
  }

  onAdd(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.added = true;
      this.cartFacade.addProduct(this.form.value);
    }
  }

  onCreatedForm(form: UntypedFormGroup): void {
    this.form = form;
  }
}
