import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatPageComponent } from './chat-page.component';

const routes: Routes = [
  {
    path: '',
    component: ChatPageComponent,
    data: {
      sitemap: {
        loc: '/support',
        priority: '1.0',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
