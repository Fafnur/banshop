import { NgModule } from '@angular/core';

import { BanshopExtractFormControlPipe } from './extract-form-control.pipe';
import { BanshopExtractFormGroupPipe } from './extract-form-group.pipe';
import { ExtractTouchedDirective } from './extract-touched.directive';

const directives = [ExtractTouchedDirective];

const pipes = [BanshopExtractFormControlPipe, BanshopExtractFormGroupPipe];

@NgModule({
  declarations: [...directives, ...pipes],
  exports: [...directives, ...pipes],
})
export class FormExtractsModule {}
