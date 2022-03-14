import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Icon = 'icon',
  Box = 'box',
}

export class ChatMessageComponentPo extends PageObject {
  get icon(): DebugElement | null {
    return this.getByAutomationId(Automation.Icon);
  }

  get box(): DebugElement | null {
    return this.getByAutomationId(Automation.Box);
  }
}
