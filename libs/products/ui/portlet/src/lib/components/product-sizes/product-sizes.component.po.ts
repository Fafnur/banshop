import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Title = 'title',
  Sizes = 'sizes',
  Button = 'button',
  Error = 'error',
}

export class ProductSizesComponentPo extends PageObject {
  get title(): string | null {
    return this.text(Automation.Title);
  }

  get sizes(): DebugElement | null {
    return this.getByAutomationId(Automation.Sizes);
  }

  get buttons(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Button);
  }

  get errorText(): string | null {
    return this.text(Automation.Error);
  }

  touchControl(): void {
    (this.fixture.componentInstance as any).control.markAllAsTouched();
  }

  triggerClickFirstButton(): void {
    this.triggerEventHandler(this.buttons[0], 'click');
  }
}
