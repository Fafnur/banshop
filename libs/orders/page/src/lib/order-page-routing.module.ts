import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteData } from '@banshop/core/navigation/common';

import { OrderPageComponent } from './order-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrderPageComponent,
    data: {
      meta: {
        title: $localize`:Order page meta|:Order | Banshop`,
        // eslint-disable-next-line max-len
        description: $localize`:Order page meta|:Place your order by filling out the form below. Our manager will contact you immediately after receiving the application.`,
        keywords: $localize`:Order page meta|:order, place a order, banshop`,
      },
    } as Partial<RouteData>,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
