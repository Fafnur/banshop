import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActionsComponent } from './actions.component';
import { CartModule } from './components/cart/cart.module';
import { PhoneModule } from './components/phone/phone.module';
import { SupportModule } from './components/support/support.module';

@NgModule({
  imports: [CommonModule, PhoneModule, SupportModule, CartModule],
  declarations: [ActionsComponent],
  exports: [ActionsComponent],
})
export class ActionsModule {}
