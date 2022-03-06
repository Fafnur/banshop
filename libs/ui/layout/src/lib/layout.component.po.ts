import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Handset = 'handset',
  Tablet = 'tablet',
  Web = 'web',
}

export class LayoutComponentPo extends PageObject {
  get handset(): DebugElement | null {
    return this.getByAutomationId(Automation.Handset);
  }

  get tablet(): DebugElement | null {
    return this.getByAutomationId(Automation.Tablet);
  }

  get web(): DebugElement | null {
    return this.getByAutomationId(Automation.Web);
  }
}
