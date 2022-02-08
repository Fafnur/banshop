import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'server-error',
    loadChildren: () => import('@banshop/russian/errors/server-error/page').then((modules) => modules.ServerErrorPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('@banshop/russian/errors/not-found/page').then((modules) => modules.NotFoundPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsPagesRoutingModule {}
