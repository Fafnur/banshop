import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Nav = 'nav',
}

export class MenuComponentPo extends PageObject {
  get nav(): DebugElement | null {
    return this.getByAutomationId(Automation.Nav);
  }
}
