import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Card = 'card',
  Count = 'count',
  List = 'list',
  Items = 'items',
  Total = 'total',
  Order = 'order',
}

export class CartInfoComponentPo extends PageObject {
  get card(): DebugElement | null {
    return this.getByAutomationId(Automation.Card);
  }

  get count(): string | null {
    return this.text(Automation.Count);
  }

  get list(): DebugElement | null {
    return this.getByAutomationId(Automation.List);
  }

  get items(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Items);
  }

  get total(): string | null {
    return this.text(Automation.Total);
  }

  get orderText(): string | null {
    return this.text(Automation.Order);
  }

  get order(): DebugElement | null {
    return this.getByAutomationId(Automation.Order);
  }
}
