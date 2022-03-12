import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavigationService } from '@banshop/core/navigation/service';
import { Product } from '@banshop/products/common';

@Component({
  selector: 'banshop-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPreviewComponent {
  @Input() product!: Product;
  @Input() images: string[] = [];

  constructor(private readonly navigationService: NavigationService) {}

  onClicked(): void {
    void this.navigationService.navigateByUrl(this.navigationService.getPaths().product, { slug: this.product.slug });
  }
}
