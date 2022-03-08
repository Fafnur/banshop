import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MultiplatformComponent } from './multiplatform.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MultiplatformComponent],
  exports: [MultiplatformComponent],
})
export class MultiplatformModule {}
