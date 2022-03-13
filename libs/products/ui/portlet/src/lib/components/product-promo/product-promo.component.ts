import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-product-promo',
  templateUrl: './product-promo.component.html',
  styleUrls: ['./product-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPromoComponent {}
