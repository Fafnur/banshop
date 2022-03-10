import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

import { CartProduct } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { Product } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

@Component({
  selector: 'banshop-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderInfoComponent implements OnInit {
  readonly columns = ['title', 'size', 'count', 'price'];
  readonly columnsFooter = ['title', 'price'];

  cartProducts$!: Observable<(CartProduct & { product?: Product })[]>;

  constructor(private readonly cartFacade: CartFacade, private readonly productFacade: ProductFacade) {}

  ngOnInit(): void {
    this.cartProducts$ = combineLatest([
      this.cartFacade.cartProducts$.pipe(isNotNullOrUndefined()),
      this.productFacade.productsEntities$.pipe(isNotNullOrUndefined()),
    ]).pipe(
      map(([cartProducts, products]) => cartProducts.map((cartProduct) => ({ ...cartProduct, product: products[cartProduct.productId] })))
    );
  }
}
