import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteData } from '@banshop/core/navigation/common';

import { ServerErrorPageComponent } from './server-error-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServerErrorPageComponent,
    data: {
      meta: {
        title: $localize`:Errors server error meta|:Internal server error | Online store Banshop`,
        // eslint-disable-next-line max-len
        description: $localize`:Errors server error meta|:If you’re facing some issues while using our service you’re unable to solve yourself, please contact our customer service department by sending a message to support. We’ll try to do our best as soon as we’ll consider  your appeal.`,
        keywords: $localize`:Errors server error meta|:not found, 404, banshop`,
      },
    } as Partial<RouteData>,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerErrorPageRoutingModule {}
