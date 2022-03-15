import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Description = 'description',
  Details = 'details',
}

export class ProductPageComponentPo extends PageObject {
  get description(): DebugElement | null {
    return this.getByAutomationId(Automation.Description);
  }

  get details(): DebugElement | null {
    return this.getByAutomationId(Automation.Details);
  }
}
