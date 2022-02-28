import { Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartProduct } from '@banshop/cart/common';
import { LayoutService } from '@banshop/ui/layout';

@Component({
  selector: 'banshop-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCardComponent implements OnInit {
  @Input() cartProduct!: CartProduct;
  readonly breakpoints = Breakpoints;
  layoutType$!: Observable<string>;

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutType$ = this.layoutService.layoutType$;
  }
}
