import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Form = 'form',
  Title = 'title',
  Info = 'info',
}

export class OrderPageComponentPo extends PageObject {
  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get title(): DebugElement | null {
    return this.getByAutomationId(Automation.Title);
  }

  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get info(): DebugElement | null {
    return this.getByAutomationId(Automation.Info);
  }
}
