import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Count = 'count',
}

export class CardCountComponentPo extends PageObject {
  get count(): DebugElement | null {
    return this.getByAutomationId(Automation.Count);
  }

  changeControl(value: number): void {
    (this.fixture.componentInstance as any)?.control.patchValue(value);
  }
}
