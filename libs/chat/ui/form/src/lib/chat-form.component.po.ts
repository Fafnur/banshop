import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Form = 'form',
  Label = 'label',
  Textarea = 'textarea',
  Submit = 'submit',
}

export class ChatFormComponentPo extends PageObject {
  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get labelText(): string | null {
    return this.text(Automation.Label);
  }

  get textarea(): DebugElement | null {
    return this.getByAutomationId(Automation.Textarea);
  }

  get submit(): DebugElement | null {
    return this.getByAutomationId(Automation.Submit);
  }

  get submitText(): string | null {
    return this.text(Automation.Submit);
  }

  setForm(message: string): void {
    (this.fixture.componentInstance as any).form.patchValue({ message });
  }

  triggerSubmit(): void {
    this.triggerEventHandler(this.submit, 'click');
  }
}
