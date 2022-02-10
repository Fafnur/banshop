import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@banshop/ui/container';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, ContainerModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
