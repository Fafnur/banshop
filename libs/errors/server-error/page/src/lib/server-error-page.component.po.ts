import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Card = 'card',
  Code = 'code',
  Description = 'description',
  Title = 'title',
  Links = 'links',
}

export class ServerErrorPageComponentPo extends PageObject {
  get card(): DebugElement | null {
    return this.getByAutomationId(Automation.Card);
  }

  get codeText(): string | null {
    return this.text(Automation.Code);
  }

  get descriptionText(): string | null {
    return this.text(Automation.Description);
  }

  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get links(): DebugElement | null {
    return this.getByAutomationId(Automation.Links);
  }
}
