import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { ErrorCardModule } from '@banshop/errors/ui/card';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

@NgModule({
  imports: [NotFoundPageRoutingModule, ErrorCardModule, NavigationPipesModule, MatButtonModule],
  declarations: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
