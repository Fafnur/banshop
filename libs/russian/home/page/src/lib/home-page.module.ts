import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [CommonModule, HomePageRoutingModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
