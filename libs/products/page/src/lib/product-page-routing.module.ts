import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductPortletComponent, ProductPortletModule } from '@banshop/products/ui/portlet';

import { ProductPageComponent } from './product-page.component';

const routes: Routes = [
  {
    path: '',
    outlet: 'top',
    component: ProductPortletComponent,
  },
  {
    path: '',
    component: ProductPageComponent,
    // Note: Sitemap and meta tags will be generated automatically
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ProductPortletModule],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
