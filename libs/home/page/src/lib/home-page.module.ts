import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListModule } from '@banshop/products/ui/list';
import { ContainerModule } from '@banshop/ui/container';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [CommonModule, HomePageRoutingModule, ContainerModule, ProductListModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
