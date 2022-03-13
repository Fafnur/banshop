import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { Product } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

@Component({
  selector: 'banshop-product-portlet',
  templateUrl: './product-portlet.component.html',
  styleUrls: ['./product-portlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPortletComponent implements OnInit {
  product$!: Observable<Product>;

  control!: FormControl;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly productFacade: ProductFacade) {}

  ngOnInit(): void {
    this.control = new FormControl(null, [Validators.required]);

    const { slug } = this.activatedRoute.snapshot.params;

    if (slug) {
      this.product$ = this.productFacade.productBySlug$(slug).pipe(isNotNullOrUndefined());
    }
  }
}
