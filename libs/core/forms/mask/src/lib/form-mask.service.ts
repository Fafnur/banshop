import { Injectable } from '@angular/core';
import { AnyMaskedOptions } from 'imask';

@Injectable({
  providedIn: 'root',
})
export class FormMaskService {
  getPhoneMask(): AnyMaskedOptions {
    return { mask: '+0 000 000 0000' };
  }

  geNumberMask(options?: Partial<{ min: number; max: number; thousandsSeparator: string }>): AnyMaskedOptions {
    return {
      mask: Number,
      min: options?.min ?? undefined,
      max: options?.max ?? undefined,
      thousandsSeparator: options?.thousandsSeparator ?? ',',
    };
  }
}
