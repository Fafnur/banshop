import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@banshop/ui/container';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, ContainerModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
