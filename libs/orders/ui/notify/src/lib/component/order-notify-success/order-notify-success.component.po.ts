import { PageObject } from '@banshop/core/testing';

enum Automation {
  Title = 'title',
  Description = 'description',
  Close = 'close',
}

export class OrderNotifySuccessComponentPo extends PageObject {
  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get descriptionText(): string | null {
    return this.text(Automation.Description);
  }

  get closeText(): string | null {
    return this.text(Automation.Close);
  }
}
