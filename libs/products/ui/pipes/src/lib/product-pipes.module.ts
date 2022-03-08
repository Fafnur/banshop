import { NgModule } from '@angular/core';

import { ProductByIdPipe } from './product-by-id.pipe';
import { ProductPathPipe } from './product-path.pipe';

const pipes = [ProductPathPipe, ProductByIdPipe];

@NgModule({
  declarations: pipes,
  exports: pipes,
})
export class ProductPipesModule {}
