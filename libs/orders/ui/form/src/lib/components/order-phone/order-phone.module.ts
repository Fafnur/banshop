import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { IMaskModule } from 'angular-imask';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { WidthModule } from '@banshop/ui/width';

import { OrderPhoneComponent } from './order-phone.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormExtractsModule, WidthModule, IMaskModule],
  declarations: [OrderPhoneComponent],
  exports: [OrderPhoneComponent],
})
export class OrderPhoneModule {}
