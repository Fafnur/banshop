import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPriceComponent {}
