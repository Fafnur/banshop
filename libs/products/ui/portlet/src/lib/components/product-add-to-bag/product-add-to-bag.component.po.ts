import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Button = 'button',
}

export class ProductAddToBagComponentPo extends PageObject {
  get button(): DebugElement | null {
    return this.getByAutomationId(Automation.Button);
  }

  get buttonText(): string | null {
    return this.text(Automation.Button);
  }

  setSize(size: number | null): void {
    (this.fixture?.componentInstance as any)?.control?.patchValue(size);
  }

  triggerClick(): void {
    this.triggerEventHandler(this.button, 'click');
  }
}
