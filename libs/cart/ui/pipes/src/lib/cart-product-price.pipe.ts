import { Pipe, PipeTransform } from '@angular/core';

import { CartProduct } from '@banshop/cart/common';
import { Product } from '@banshop/products/common';

@Pipe({
  name: 'cartProductPrice',
})
export class CartProductPricePipe implements PipeTransform {
  transform(cartProduct: CartProduct, product: Product): number {
    return cartProduct.count * product.price;
  }
}
