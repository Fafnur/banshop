import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { Product, ProductField } from '@banshop/products/common';

@Component({
  selector: 'banshop-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {
  @Input() product!: Product;
  @Output() created = new EventEmitter<UntypedFormGroup>();

  readonly fields = ProductField;

  form!: UntypedFormGroup;

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      productId: new UntypedFormControl(this.product.id, [Validators.required]),
      size: new UntypedFormControl(null, [Validators.required]),
      count: new UntypedFormControl(1, [Validators.required]),
    });

    this.created.emit(this.form);
  }
}
