import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { OrderNotifyFailureComponent } from './order-notify-failure.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule, NavigationPipesModule],
  declarations: [OrderNotifyFailureComponent],
  exports: [OrderNotifyFailureComponent],
})
export class OrderNotifyFailureModule {}
