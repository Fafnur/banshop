import { Pipe, PipeTransform } from '@angular/core';

import { CartProduct } from '@banshop/cart/common';

@Pipe({
  name: 'cartTotalCount',
})
export class CartTotalCountPipe implements PipeTransform {
  transform(cartProducts: CartProduct[]): number {
    return cartProducts.reduce((total, cartProduct) => total + cartProduct.count, 0);
  }
}
