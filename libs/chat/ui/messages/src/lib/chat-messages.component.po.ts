import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Date = 'date',
  Message = 'message',
}

export class ChatMessagesComponentPo extends PageObject {
  get dates(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Date);
  }

  get messages(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Message);
  }
}
