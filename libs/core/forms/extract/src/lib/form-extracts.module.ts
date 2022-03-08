import { NgModule } from '@angular/core';

import { ExtractFormControlPipe } from './extract-form-control.pipe';
import { ExtractFormGroupPipe } from './extract-form-group.pipe';
import { ExtractTouchedDirective } from './extract-touched.directive';

const directives = [ExtractTouchedDirective];

const pipes = [ExtractFormControlPipe, ExtractFormGroupPipe];

@NgModule({
  declarations: [...directives, ...pipes],
  exports: [...directives, ...pipes],
})
export class FormExtractsModule {}
