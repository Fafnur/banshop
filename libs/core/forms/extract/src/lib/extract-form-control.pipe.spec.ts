import { FormControl, FormGroup } from '@angular/forms';

import { ExtractFormControlPipe } from './extract-form-control.pipe';

describe('ExtractFormControlPipe', () => {
  let pipe: ExtractFormControlPipe;

  beforeEach(() => {
    pipe = new ExtractFormControlPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return field by name', () => {
    const form = new FormGroup({
      field: new FormControl(),
    });

    expect(pipe.transform(form, 'field')).toBeTruthy();
  });

  it('should return empty field', () => {
    console.error = jest.fn();

    const form = new FormGroup({
      field: new FormControl('simple'),
    });

    expect(pipe.transform(form, 'field2').value).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });
});
