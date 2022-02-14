import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Container = 'container',
  Logo = 'logo',
  Phone = 'phone',
}

export class HeaderComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get logo(): DebugElement | null {
    return this.getByAutomationId(Automation.Logo);
  }

  get phone(): DebugElement | null {
    return this.getByAutomationId(Automation.Phone);
  }
}
