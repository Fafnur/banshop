import { NgModule } from '@angular/core';

import { CartProductPricePipe } from './cart-product-price.pipe';

const pipes = [CartProductPricePipe];

@NgModule({
  declarations: pipes,
  exports: pipes,
})
export class CartPipesModule {}
