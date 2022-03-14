import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Image = 'image',
}

export class ChatIconComponentPo extends PageObject {
  get image(): DebugElement | null {
    return this.getByAutomationId(Automation.Image);
  }
}
