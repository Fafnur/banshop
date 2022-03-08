import { Pipe, PipeTransform } from '@angular/core';

import { NavigationService } from '@banshop/core/navigation/service';
import { Product } from '@banshop/products/common';

@Pipe({
  name: 'productPath',
})
export class ProductPathPipe implements PipeTransform {
  constructor(private readonly navigationService: NavigationService) {}

  transform(product: Product): string {
    const route = this.navigationService.getRoute(this.navigationService.getPaths().product, {
      slug: product.slug,
    });

    return `/${route.slice(1).join('/')}`;
  }
}
