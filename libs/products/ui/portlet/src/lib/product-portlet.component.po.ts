import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Carousel = 'carousel',
  Title = 'title',
  Subtitle = 'subtitle',
  Price = 'price',
  Promo = 'promo',
  Sizes = 'sizes',
  AddToBag = 'add-to-bag',
}

export class ProductPortletComponentPo extends PageObject {
  get carousel(): DebugElement | null {
    return this.getByAutomationId(Automation.Carousel);
  }

  get title(): DebugElement | null {
    return this.getByAutomationId(Automation.Title);
  }

  get subtitle(): DebugElement | null {
    return this.getByAutomationId(Automation.Subtitle);
  }

  get price(): DebugElement | null {
    return this.getByAutomationId(Automation.Price);
  }

  get promo(): DebugElement | null {
    return this.getByAutomationId(Automation.Promo);
  }

  get sizes(): DebugElement | null {
    return this.getByAutomationId(Automation.Sizes);
  }

  get addToBag(): DebugElement | null {
    return this.getByAutomationId(Automation.AddToBag);
  }
}
