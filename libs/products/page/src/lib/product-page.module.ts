import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ProductPageComponent } from './product-page.component';
import { ProductPageRoutingModule } from './product-page-routing.module';

@NgModule({
  imports: [CommonModule, ProductPageRoutingModule, MatTabsModule],
  declarations: [ProductPageComponent],
})
export class ProductPageModule {}
