import { NgModule } from '@angular/core';

import { ProductPathPipe } from './product-path.pipe';

const pipes = [ProductPathPipe];

@NgModule({
  declarations: pipes,
  exports: pipes,
})
export class ProductPipesModule {}
