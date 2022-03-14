import { PageObject } from '@banshop/core/testing';

enum Automation {
  Date = 'date',
}

export class ChatDateComponentPo extends PageObject {
  get date(): string | null {
    return this.text(Automation.Date);
  }
}
