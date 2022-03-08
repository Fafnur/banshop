import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Carousel = 'carousel',
}

export class CardPreviewComponentPo extends PageObject {
  get carousel(): DebugElement | null {
    return this.getByAutomationId(Automation.Carousel);
  }
}
