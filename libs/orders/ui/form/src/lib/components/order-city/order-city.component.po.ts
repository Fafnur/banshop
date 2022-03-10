import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Label = 'label',
  Control = 'control',
  FormField = 'form-field',
  Form = 'form',
}

export class OrderCityComponentPo extends PageObject {
  get labelText(): string | null {
    return this.text(Automation.Label);
  }

  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get formField(): DebugElement | null {
    return this.getByAutomationId(Automation.FormField);
  }

  get control(): DebugElement | null {
    return this.getByAutomationId(Automation.Control);
  }
}
