import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from '@banshop/ui/carousel';
import { GridModule } from '@banshop/ui/grid';

import { ProductBoxComponent } from './product-box.component';

@NgModule({
  imports: [CommonModule, GridModule, CarouselModule],
  declarations: [ProductBoxComponent],
  exports: [ProductBoxComponent],
})
export class ProductBoxModule {}
