import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum ContainerAutomation {
  Handset = 'handset',
  Tablet = 'tablet',
  Web = 'web',
}

export class LayoutComponentPo extends PageObject {
  get handset(): DebugElement | null {
    return this.getByAutomationId(ContainerAutomation.Handset);
  }

  get tablet(): DebugElement | null {
    return this.getByAutomationId(ContainerAutomation.Tablet);
  }

  get web(): DebugElement | null {
    return this.getByAutomationId(ContainerAutomation.Web);
  }
}
