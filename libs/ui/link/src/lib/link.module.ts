import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LinkDirective } from './link.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LinkDirective],
  exports: [LinkDirective],
})
export class LinkModule {}
