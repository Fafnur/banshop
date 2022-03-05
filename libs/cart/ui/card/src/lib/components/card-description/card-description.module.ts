import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardDescriptionComponent } from './card-description.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardDescriptionComponent],
  exports: [CardDescriptionComponent],
})
export class CardDescriptionModule {}
