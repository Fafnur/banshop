import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartPageComponent } from './cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
    data: {
      sitemap: {
        loc: '/cart',
        priority: '1.0',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}
