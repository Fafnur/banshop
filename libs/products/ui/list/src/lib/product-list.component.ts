import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {}
