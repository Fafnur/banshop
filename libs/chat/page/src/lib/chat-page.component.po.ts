import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Form = 'form',
  Messages = 'messages',
}

export class ChatPageComponentPo extends PageObject {
  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get messages(): DebugElement | null {
    return this.getByAutomationId(Automation.Messages);
  }
}
