import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardModule } from '@banshop/products/ui/card';
import { GridModule } from '@banshop/ui/grid';

import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [CommonModule, ProductCardModule, GridModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListModule {}
