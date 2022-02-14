import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoModule } from '../logo/logo.module';
import { NavModule } from '../nav/nav.module';
import { CopyrightModule } from './copyright/copyright.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [CommonModule, LogoModule, NavModule, CopyrightModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class SidebarModule {}
