import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardTitleComponent } from './card-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardTitleComponent],
  exports: [CardTitleComponent],
})
export class CardTitleModule {}
