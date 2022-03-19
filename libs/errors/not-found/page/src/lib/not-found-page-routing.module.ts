import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteData } from '@banshop/core/navigation/common';

import { NotFoundPageComponent } from './not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent,
    data: {
      meta: {
        title: $localize`:Errors not found meta|:Page not found | Online store Banshop`,
        description: $localize`:Errors not found meta|:Sorry, the requested page was not found. Go to the home page`,
        keywords: $localize`:Errors not found meta|:not found, 404, banshop`,
      },
    } as Partial<RouteData>,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundPageRoutingModule {}
