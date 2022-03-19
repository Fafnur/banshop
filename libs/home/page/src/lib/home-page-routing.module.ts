import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteData } from '@banshop/core/navigation/common';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      sitemap: {
        loc: '/',
        priority: '1.0',
      },
      meta: {
        title: $localize`:Home page meta|:Online store Banshop`,
        // eslint-disable-next-line max-len
        description: $localize`:Home page meta|:Banshop sportswear, shoes and accessories. Free delivery in Moscow and all over Russia when paying on the website.`,
        keywords: $localize`:Home page meta|:online store, sneakers, sports shoes, banshop`,
      },
    } as Partial<RouteData>,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
