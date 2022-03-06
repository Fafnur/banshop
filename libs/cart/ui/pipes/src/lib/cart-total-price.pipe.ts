import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CartProduct } from '@banshop/cart/common';
import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { ProductFacade } from '@banshop/products/state';

@Pipe({
  name: 'cartTotalPrice',
})
export class CartTotalPricePipe implements PipeTransform {
  constructor(private readonly productFacade: ProductFacade) {}

  transform(cartProducts: CartProduct[]): Observable<number> {
    return this.productFacade.productsEntities$.pipe(
      isNotNullOrUndefined(),
      map((products) =>
        cartProducts.reduce((total, cartProduct) => total + cartProduct.count * (products[cartProduct.productId]?.price ?? 0), 0)
      )
    );
  }
}
