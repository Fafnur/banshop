import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartProduct } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';

@Component({
  selector: 'banshop-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit {
  cartProducts$!: Observable<CartProduct[]>;

  constructor(private readonly cartFacade: CartFacade, @Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.cartProducts$ = this.cartFacade.cartProducts$;
  }

  trackByFn(index: number, cartProduct: CartProduct): string {
    return `${cartProduct.productId}_${cartProduct.size}`;
  }
}
