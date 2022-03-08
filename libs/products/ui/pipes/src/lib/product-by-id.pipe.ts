import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { Product } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

@Pipe({
  name: 'productById',
})
export class ProductByIdPipe implements PipeTransform {
  constructor(private readonly productFacade: ProductFacade) {}

  transform(productId: number): Observable<Product> {
    return this.productFacade.product$(productId).pipe(isNotNullOrUndefined());
  }
}
