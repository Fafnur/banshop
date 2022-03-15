import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Title = 'title',
  NextTitle = 'next-title',
  NextDescription = 'next-description',
  Continue = 'continue',
  Cart = 'cart',
}

export class ProductAddToBagDialogComponentPo extends PageObject {
  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get nextTitleText(): string | null {
    return this.text(Automation.NextTitle);
  }

  get nextDescriptionText(): string | null {
    return this.text(Automation.NextDescription);
  }

  get continue(): DebugElement | null {
    return this.getByAutomationId(Automation.Continue);
  }

  get continueText(): string | null {
    return this.text(Automation.Continue);
  }

  get cart(): DebugElement | null {
    return this.getByAutomationId(Automation.Cart);
  }

  get cartText(): string | null {
    return this.text(Automation.Cart);
  }
}
