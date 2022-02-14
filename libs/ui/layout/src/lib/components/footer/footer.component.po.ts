import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Container = 'container',
  Copyright = 'copyright',
  Terms = 'terms',
}

export class FooterComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get copyright(): DebugElement | null {
    return this.getByAutomationId(Automation.Copyright);
  }

  get terms(): DebugElement | null {
    return this.getByAutomationId(Automation.Terms);
  }
}
