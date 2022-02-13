import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoComponent } from './logo.component';
import { RouterModule } from '@angular/router';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationPipesModule],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class LogoModule {}
