import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Dots = 'carousel-dots',
  Item = 'carousel-dots-item',
}

export class CarouselComponentPo extends PageObject {
  get carouselDots(): DebugElement | null {
    return this.getByAutomationId(Automation.Dots);
  }

  get carouselDotsItems(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Item);
  }

  triggerCarouselDotsFirstClick(): void {
    this.triggerEventHandler(this.carouselDotsItems[0], 'click');
  }
}
