import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardPreviewComponent } from './card-preview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardPreviewComponent],
  exports: [CardPreviewComponent],
})
export class CardPreviewModule {}
