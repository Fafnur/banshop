import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { CarouselModule } from '@banshop/ui/carousel';

import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, CarouselModule],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
