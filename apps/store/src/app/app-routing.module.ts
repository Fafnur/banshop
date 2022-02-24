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
        loadChildren: () => import('@banshop/russian/home/page').then((modules) => modules.HomePageModule),
      },
      {
        path: NAVIGATION_PATHS.cart,
        loadChildren: () => import('@banshop/cart/page').then((modules) => modules.CartPageModule),
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
