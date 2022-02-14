import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@banshop/ui/container';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [CommonModule, HomePageRoutingModule, ContainerModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
