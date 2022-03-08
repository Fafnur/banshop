import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Form = 'form',
  Size = 'size',
  Count = 'count',
}

export class ProductFormComponentPo extends PageObject {
  get size(): DebugElement | null {
    return this.getByAutomationId(Automation.Size);
  }

  get count(): DebugElement | null {
    return this.getByAutomationId(Automation.Count);
  }

  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }
}
