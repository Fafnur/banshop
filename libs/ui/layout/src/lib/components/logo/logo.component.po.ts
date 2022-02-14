import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Link = 'link',
  Image = 'image',
  Brand = 'brand',
}

export class LogoComponentPo extends PageObject {
  get link(): DebugElement | null {
    return this.getByAutomationId(Automation.Link);
  }

  get image(): DebugElement | null {
    return this.getByAutomationId(Automation.Image);
  }

  get brand(): DebugElement | null {
    return this.getByAutomationId(Automation.Brand);
  }

  get brandText(): string | null {
    return this.text(Automation.Brand);
  }
}
