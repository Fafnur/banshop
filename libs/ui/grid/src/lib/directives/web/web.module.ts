import { NgModule } from '@angular/core';

import { WebDirective } from './web.directive';

@NgModule({
  declarations: [WebDirective],
  exports: [WebDirective],
})
export class WebModule {}
