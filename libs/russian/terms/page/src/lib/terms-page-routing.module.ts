import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteData } from '@banshop/core/navigation/common';

import { TermsPageComponent } from './terms-page.component';

const routes: Routes = [
  {
    path: '',
    component: TermsPageComponent,
    data: {
      sitemap: {
        loc: '/terms',
        priority: '1.0',
      },
      meta: {
        title: $localize`:Terms page meta|:Terms | Banshop`,
        description: $localize`:Terms page meta|:Agreement on the terms of sale of goods of banshop.`,
        keywords: $localize`:Terms page meta|:terms, private and confidential, banshop`,
      },
    } as Partial<RouteData>,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsPageRoutingModule {}
