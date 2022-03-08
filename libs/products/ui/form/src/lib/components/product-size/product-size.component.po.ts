import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Label = 'label',
  FormField = 'form-field',
  Form = 'form',
}

export class ProductSizeComponentPo extends PageObject {
  get labelText(): string | null {
    return this.text(Automation.Label);
  }

  get formField(): DebugElement | null {
    return this.getByAutomationId(Automation.FormField);
  }

  get control(): FormControl | null {
    return this.getByAutomationId(Automation.Form)?.componentInstance.control ?? null;
  }
}
