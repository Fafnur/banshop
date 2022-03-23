import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartFacade } from '@banshop/cart/state';
import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';

@Component({
  selector: 'banshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private readonly cartFacade: CartFacade, @Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.count$ = this.cartFacade.count$;
  }
}
