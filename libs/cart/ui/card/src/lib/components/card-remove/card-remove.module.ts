import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CardRemoveComponent } from './card-remove.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [CardRemoveComponent],
  exports: [CardRemoveComponent],
})
export class CardRemoveModule {}
