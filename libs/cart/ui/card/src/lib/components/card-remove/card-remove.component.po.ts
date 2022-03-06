import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Icon = 'icon',
  Button = 'button',
}

export class CardRemoveComponentPo extends PageObject {
  get icon(): DebugElement | null {
    return this.getByAutomationId(Automation.Icon);
  }

  get iconText(): string | null {
    return this.text(Automation.Icon);
  }

  get button(): DebugElement | null {
    return this.getByAutomationId(Automation.Button);
  }

  get buttonText(): string | null {
    return this.text(Automation.Button);
  }

  triggerIconClick(): void {
    return this.triggerEventHandler(this.icon, 'click');
  }

  triggerButtonClick(): void {
    return this.triggerEventHandler(this.button, 'click');
  }
}
