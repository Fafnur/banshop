import { DebugElement } from '@angular/core';

import { CartProduct } from '@banshop/cart/common';
import { PageObject } from '@banshop/core/testing';

enum Automation {
  Title = 'title',
  Box = 'box',
  Form = 'form',
  NextTitle = 'next-title',
  NextDescription = 'next-description',
  Cancel = 'cancel',
  Add = 'add',
  Continue = 'continue',
  Cart = 'cart',
}

export class CartAddDialogComponentPo extends PageObject {
  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get box(): DebugElement | null {
    return this.getByAutomationId(Automation.Box);
  }

  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get nextTitleText(): string | null {
    return this.text(Automation.NextTitle);
  }

  get nextDescriptionText(): string | null {
    return this.text(Automation.NextDescription);
  }

  get cancel(): DebugElement | null {
    return this.getByAutomationId(Automation.Cancel);
  }

  get cancelText(): string | null {
    return this.text(Automation.Cancel);
  }

  get add(): DebugElement | null {
    return this.getByAutomationId(Automation.Add);
  }

  get addText(): string | null {
    return this.text(Automation.Add);
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

  setForm(formValue: CartProduct): void {
    (this.fixture.componentInstance as any).form.patchValue(formValue);
  }

  triggerAddClick(): void {
    this.triggerEventHandler(this.add, 'click');
  }
}
