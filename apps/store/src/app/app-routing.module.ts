import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { OrderGuard, OrderGuardsModule } from '@banshop/orders/guards';
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
        canActivate: [OrderGuard],
        loadChildren: () => import('@banshop/orders/page').then((modules) => modules.OrderPageModule),
      },
      {
        path: NAVIGATION_PATHS.support,
        canActivate: [OrderGuard],
        loadChildren: () => import('@banshop/chat/page').then((modules) => modules.ChatPageModule),
      },
      {
        path: NAVIGATION_PATHS.terms,
        canActivate: [OrderGuard],
        loadChildren: () => import('@banshop/russian/terms/page').then((modules) => modules.TermsPageModule),
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
    OrderGuardsModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
