import { FormControl, FormGroup } from '@angular/forms';

import { BanshopExtractFormGroupPipe } from './extract-form-group.pipe';

describe('ExtractFormGroupPipe', () => {
  let pipe: BanshopExtractFormGroupPipe;

  beforeEach(() => {
    pipe = new BanshopExtractFormGroupPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return field by name', () => {
    const form = new FormGroup({
      field: new FormGroup({
        subfield: new FormControl(),
      }),
    });

    expect(Object.keys(pipe.transform(form, 'field').controls).length).toBe(1);
  });

  it('should return empty field', () => {
    console.error = jest.fn();

    const form = new FormGroup({
      field: new FormGroup({
        subfield: new FormControl(),
      }),
    });

    expect(Object.keys(pipe.transform(form, 'field2').controls).length).toBe(0);
    expect(console.error).toHaveBeenCalled();
  });
});
