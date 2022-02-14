import { NgModule } from '@angular/core';

import { PhoneComponent } from './phone.component';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [PhoneComponent, PhonePipe],
  exports: [PhoneComponent],
})
export class PhoneModule {}
