import { PageObject } from '@banshop/core/testing';

enum Automation {
  Body = 'body',
  Time = 'time',
}

export class ChatBoxComponentPo extends PageObject {
  get bodyText(): string | null {
    return this.text(Automation.Body);
  }

  get timeText(): string | null {
    return this.text(Automation.Time);
  }
}
