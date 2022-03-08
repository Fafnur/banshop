import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from '@banshop/ui/carousel';

import { CardPreviewComponent } from './card-preview.component';

@NgModule({
  imports: [CommonModule, CarouselModule],
  declarations: [CardPreviewComponent],
  exports: [CardPreviewComponent],
})
export class CardPreviewModule {}
