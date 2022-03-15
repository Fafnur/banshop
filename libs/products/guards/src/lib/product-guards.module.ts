import { NgModule } from '@angular/core';

import { ProductGuard } from './product.guard';

@NgModule({
  providers: [ProductGuard],
})
export class ProductGuardsModule {}
