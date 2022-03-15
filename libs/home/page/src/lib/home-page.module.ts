import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListModule } from '@banshop/products/ui/list';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [CommonModule, HomePageRoutingModule, ProductListModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
