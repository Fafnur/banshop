import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { takeUntil } from 'rxjs';

import { CartAddService } from '@banshop/cart/ui/add';
import { NavigationService } from '@banshop/core/navigation/service';
import { DestroyService } from '@banshop/core/utils/destroy';
import { Product } from '@banshop/products/common';

@Component({
  selector: 'banshop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    private readonly cartAddService: CartAddService,
    private readonly destroy$: DestroyService,
    private readonly navigationService: NavigationService
  ) {}

  onAdd(): void {
    this.cartAddService.add(this.product).pipe(takeUntil(this.destroy$)).subscribe();
  }

  onClicked(): void {
    void this.navigationService.navigateByUrl(this.navigationService.getPaths().product, { slug: this.product.slug });
  }
}
