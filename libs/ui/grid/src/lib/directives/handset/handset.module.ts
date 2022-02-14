import { NgModule } from '@angular/core';

import { HandsetDirective } from './handset.directive';

@NgModule({
  declarations: [HandsetDirective],
  exports: [HandsetDirective],
})
export class HandsetModule {}
