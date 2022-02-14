import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Nav = 'nav',
  Logo = 'logo',
  Copyright = 'copyright',
}

export class SidebarComponentPo extends PageObject {
  get nav(): DebugElement | null {
    return this.getByAutomationId(Automation.Nav);
  }

  get logo(): DebugElement | null {
    return this.getByAutomationId(Automation.Logo);
  }

  get copyright(): DebugElement | null {
    return this.getByAutomationId(Automation.Copyright);
  }
}
