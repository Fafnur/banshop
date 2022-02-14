import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { ErrorCardModule } from '@banshop/errors/ui/card';
import { LinkModule } from '@banshop/ui/link';

import { ServerErrorPageComponent } from './server-error-page.component';
import { ServerErrorPageRoutingModule } from './server-error-page-routing.module';

@NgModule({
  imports: [ServerErrorPageRoutingModule, ErrorCardModule, NavigationPipesModule, MatButtonModule, LinkModule],
  declarations: [ServerErrorPageComponent],
})
export class ServerErrorPageModule {}
