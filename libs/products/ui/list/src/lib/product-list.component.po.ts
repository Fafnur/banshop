import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Row = 'row',
  Card = 'card',
}

export class ProductListComponentPo extends PageObject {
  get row(): DebugElement | null {
    return this.getByAutomationId(Automation.Row);
  }

  get card(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Card);
  }
}
