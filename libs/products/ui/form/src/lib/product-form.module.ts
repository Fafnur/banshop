import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { GridModule } from '@banshop/ui/grid';

import { ProductCountModule } from './components/product-count/product-count.module';
import { ProductSizeModule } from './components/product-size/product-size.module';
import { ProductFormComponent } from './product-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ProductCountModule, ProductSizeModule, FormExtractsModule, GridModule],
  declarations: [ProductFormComponent],
  exports: [ProductFormComponent],
})
export class ProductFormModule {}
