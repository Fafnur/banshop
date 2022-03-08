import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product, ProductField } from '@banshop/products/common';

@Component({
  selector: 'banshop-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {
  @Input() product!: Product;
  @Output() created = new EventEmitter<FormGroup>();

  readonly fields = ProductField;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      productId: new FormControl(this.product.id, [Validators.required]),
      size: new FormControl(null, [Validators.required]),
      count: new FormControl(1, [Validators.required]),
    });

    this.created.emit(this.form);
  }
}
