import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@banshop/ui/container';

import { LogoModule } from '../logo/logo.module';
import { ActionsModule } from './actions/actions.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, ContainerModule, LogoModule, ActionsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
