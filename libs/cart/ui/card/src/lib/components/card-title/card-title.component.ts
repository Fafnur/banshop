import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';
import { Product } from '@banshop/products/common';

@Component({
  selector: 'banshop-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitleComponent {
  @Input() product!: Product;

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
