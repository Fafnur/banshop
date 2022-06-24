import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Pipe({
  name: 'banshopExtractFormControl',
})
export class BanshopExtractFormControlPipe implements PipeTransform {
  transform(formGroup: UntypedFormGroup, controlName: string): UntypedFormControl {
    const control = formGroup.get(controlName) as UntypedFormControl | null;

    if (!control) {
      console.error('Form control is not found');
    }

    return control ?? new UntypedFormControl();
  }
}
