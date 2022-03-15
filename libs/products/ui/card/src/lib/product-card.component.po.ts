import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Carousel = 'carousel',
  Title = 'title',
  Subtitle = 'subtitle',
  Price = 'price',
  Description = 'description',
  Details = 'details',
  Buy = 'buy',
}

export class ProductCardComponentPo extends PageObject {
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

  get description(): DebugElement | null {
    return this.getByAutomationId(Automation.Description);
  }

  get details(): DebugElement | null {
    return this.getByAutomationId(Automation.Details);
  }

  get buy(): DebugElement | null {
    return this.getByAutomationId(Automation.Buy);
  }
}
