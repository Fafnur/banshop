import { NgModule } from '@angular/core';

import { TabletDirective } from './tablet.directive';

@NgModule({
  declarations: [TabletDirective],
  exports: [TabletDirective],
})
export class TabletModule {}
