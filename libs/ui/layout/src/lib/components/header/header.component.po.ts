import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Container = 'container',
  Logo = 'logo',
  Actions = 'actions',
}

export class HeaderComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get logo(): DebugElement | null {
    return this.getByAutomationId(Automation.Logo);
  }

  get actions(): DebugElement | null {
    return this.getByAutomationId(Automation.Actions);
  }
}
