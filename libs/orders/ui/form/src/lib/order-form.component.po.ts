import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Form = 'form',
  Phone = 'phone',
  Email = 'email',
  City = 'city',
  Address = 'address',
  Postcode = 'postcode',
  Submit = 'submit',
}

export class OrderFormComponentPo extends PageObject {
  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get phone(): DebugElement | null {
    return this.getByAutomationId(Automation.Phone);
  }

  get email(): DebugElement | null {
    return this.getByAutomationId(Automation.Email);
  }

  get city(): DebugElement | null {
    return this.getByAutomationId(Automation.City);
  }

  get address(): DebugElement | null {
    return this.getByAutomationId(Automation.Address);
  }

  get postcode(): DebugElement | null {
    return this.getByAutomationId(Automation.Postcode);
  }

  get submit(): DebugElement | null {
    return this.getByAutomationId(Automation.Submit);
  }

  get submitText(): string | null {
    return this.text(Automation.Submit);
  }
}
