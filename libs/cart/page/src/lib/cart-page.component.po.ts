import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  List = 'list',
  Info = 'info',
}

export class CartPageComponentPo extends PageObject {
  get list(): DebugElement | null {
    return this.getByAutomationId(Automation.List);
  }

  get info(): DebugElement | null {
    return this.getByAutomationId(Automation.Info);
  }
}
