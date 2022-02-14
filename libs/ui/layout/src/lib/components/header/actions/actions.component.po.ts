import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Cart = 'cart',
  Phone = 'phone',
  Support = 'support',
}

export class ActionsComponentPo extends PageObject {
  get support(): DebugElement | null {
    return this.getByAutomationId(Automation.Support);
  }

  get phone(): DebugElement | null {
    return this.getByAutomationId(Automation.Phone);
  }

  get cart(): DebugElement | null {
    return this.getByAutomationId(Automation.Cart);
  }
}
