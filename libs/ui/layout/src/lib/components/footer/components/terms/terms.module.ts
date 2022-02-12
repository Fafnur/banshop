import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { LinkModule } from '@banshop/ui/link';

import { TermsComponent } from './terms.component';

@NgModule({
  imports: [CommonModule, RouterModule, LinkModule, NavigationPipesModule],
  declarations: [TermsComponent],
  exports: [TermsComponent],
})
export class TermsModule {}
