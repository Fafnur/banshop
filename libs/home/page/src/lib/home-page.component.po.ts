import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  List = 'list',
}

export class HomePageComponentPo extends PageObject {
  get list(): DebugElement | null {
    return this.getByAutomationId(Automation.List);
  }
}
