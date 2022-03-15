import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Card = 'card',
  Empty = 'empty',
}

export class CartListComponentPo extends PageObject {
  get card(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Card);
  }

  get empty(): string | null {
    return this.text(Automation.Empty);
  }
}
