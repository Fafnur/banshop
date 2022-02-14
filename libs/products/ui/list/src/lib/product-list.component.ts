import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { Product } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

@Component({
  selector: 'banshop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private readonly productFacade: ProductFacade) {}

  ngOnInit(): void {
    this.products$ = this.productFacade.products$.pipe(isNotNullOrUndefined());
  }

  trackByFn(index: number, product: Product): number {
    return product.id;
  }
}
