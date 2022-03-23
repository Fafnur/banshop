import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { NavComponent } from './nav.component';
import { NavLinkModule } from './nav-link/nav-link.module';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, NavigationPipesModule, NavLinkModule, MatBadgeModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
