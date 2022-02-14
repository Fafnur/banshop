import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  NavLink = 'nav-link',
}

export class NavComponentPo extends PageObject {
  get navLinks(): DebugElement[] {
    return this.getAllByAutomationId(Automation.NavLink);
  }
}
