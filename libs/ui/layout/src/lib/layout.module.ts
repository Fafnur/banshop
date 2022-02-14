import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banshop/ui/container';

import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, HeaderModule, FooterModule, SidebarModule, MenuModule, ContainerModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
