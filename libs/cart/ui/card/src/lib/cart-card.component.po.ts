import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Handset = 'handset',
  Tablet = 'tablet',
  Web = 'web',
}

export class CartCardComponentPo extends PageObject {
  get handset(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Handset);
  }

  get tablet(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Tablet);
  }

  get web(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Web);
  }
}
