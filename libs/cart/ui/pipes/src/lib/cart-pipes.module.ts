import { NgModule } from '@angular/core';

import { CartProductPricePipe } from './cart-product-price.pipe';
import { CartTotalCountPipe } from './cart-total-count.pipe';
import { CartTotalPricePipe } from './cart-total-price.pipe';

const pipes = [CartProductPricePipe, CartTotalPricePipe, CartTotalCountPipe];

@NgModule({
  declarations: pipes,
  exports: pipes,
})
export class CartPipesModule {}
