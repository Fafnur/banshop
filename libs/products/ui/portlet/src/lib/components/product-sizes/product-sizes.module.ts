import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FormExtractsModule } from '@banshop/core/forms/extract';

import { ProductSizesComponent } from './product-sizes.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, FormExtractsModule],
  declarations: [ProductSizesComponent],
  exports: [ProductSizesComponent],
})
export class ProductSizesModule {}
