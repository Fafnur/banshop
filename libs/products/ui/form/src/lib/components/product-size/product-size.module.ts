import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { WidthModule } from '@banshop/ui/width';

import { ProductSizeComponent } from './product-size.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, WidthModule, FormExtractsModule],
  declarations: [ProductSizeComponent],
  exports: [ProductSizeComponent],
})
export class ProductSizeModule {}
