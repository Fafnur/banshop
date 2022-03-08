import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'extractFormGroup',
})
export class ExtractFormGroupPipe implements PipeTransform {
  transform(formGroup: FormGroup, controlName: string): FormGroup {
    const group = formGroup.get(controlName) as FormGroup | null;

    if (!group) {
      console.error('Form group is not found');
    }

    return group ?? new FormGroup({});
  }
}
