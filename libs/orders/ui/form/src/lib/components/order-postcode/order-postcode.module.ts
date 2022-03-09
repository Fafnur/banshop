import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FormExtractsModule } from '@banshop/core/forms/extract';
import { WidthModule } from '@banshop/ui/width';

import { OrderPostcodeComponent } from './order-postcode.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormExtractsModule, WidthModule],
  declarations: [OrderPostcodeComponent],
  exports: [OrderPostcodeComponent],
})
export class OrderPostcodeModule {}
