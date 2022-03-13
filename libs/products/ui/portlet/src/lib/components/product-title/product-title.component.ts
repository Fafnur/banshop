import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTitleComponent {}
