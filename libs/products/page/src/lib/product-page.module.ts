import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { CarouselModule } from '@banshop/ui/carousel';

import { ProductPageComponent } from './product-page.component';
import { ProductPageRoutingModule } from './product-page-routing.module';

@NgModule({
  imports: [CommonModule, ProductPageRoutingModule, MatCardModule, MatButtonModule, MatIconModule, CarouselModule],
  declarations: [ProductPageComponent],
})
export class ProductPageModule {}
