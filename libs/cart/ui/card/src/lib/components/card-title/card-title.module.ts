import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { CardTitleComponent } from './card-title.component';

@NgModule({
  imports: [RouterModule, NavigationPipesModule],
  declarations: [CardTitleComponent],
  exports: [CardTitleComponent],
})
export class CardTitleModule {}
