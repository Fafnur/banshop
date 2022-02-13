import { NgModule } from '@angular/core';

import { LogoModule } from '../logo/logo.module';
import { NavModule } from '../nav/nav.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [LogoModule, NavModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class SidebarModule {}
