import { NgModule } from '@angular/core';

import { FullWidthDirective } from './full-width.directive';

@NgModule({
  declarations: [FullWidthDirective],
  exports: [FullWidthDirective],
})
export class WidthModule {}
