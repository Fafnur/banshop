import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@banshop/ui/container';

import { LogoModule } from '../logo/logo.module';
import { HeaderComponent } from './header.component';
import { PhoneModule } from './phone/phone.module';

@NgModule({
  imports: [CommonModule, ContainerModule, LogoModule, PhoneModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
