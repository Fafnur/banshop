import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Table = 'table',
}

export class OrderInfoComponentPo extends PageObject {
  get table(): DebugElement | null {
    return this.getByAutomationId(Automation.Table);
  }
}
