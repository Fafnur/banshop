import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { CarouselModule } from '@banshop/ui/carousel';

import { ProductPageComponent } from './product-page.component';
import { ProductPageRoutingModule } from './product-page-routing.module';

@NgModule({
  imports: [CommonModule, ProductPageRoutingModule, MatTabsModule, MatButtonModule, MatIconModule, CarouselModule],
  declarations: [ProductPageComponent],
})
export class ProductPageModule {}
