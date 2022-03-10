import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { LayoutComponent } from '@banshop/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.home,
        loadChildren: () => import('@banshop/home/page').then((modules) => modules.HomePageModule),
      },
      {
        path: NAVIGATION_PATHS.product,
        loadChildren: () => import('@banshop/products/page').then((modules) => modules.ProductPageModule),
      },
      {
        path: NAVIGATION_PATHS.cart,
        loadChildren: () => import('@banshop/cart/page').then((modules) => modules.CartPageModule),
      },
      {
        path: NAVIGATION_PATHS.order,
        loadChildren: () => import('@banshop/orders/page').then((modules) => modules.OrderPageModule),
      },
      {
        path: '',
        loadChildren: () => import('@banshop/errors/pages').then((modules) => modules.ErrorsPagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
