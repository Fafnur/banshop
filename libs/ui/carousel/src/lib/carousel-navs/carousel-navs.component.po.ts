import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Navs = 'carousel-navs',
  Next = 'carousel-navs-next',
  Prev = 'carousel-navs-prev',
}

export class CarouselNavsComponentPo extends PageObject {
  get carouselNavs(): DebugElement | null {
    return this.getByAutomationId(Automation.Navs);
  }

  get carouselNavsPrev(): DebugElement | null {
    return this.getByAutomationId(Automation.Prev);
  }

  get carouselNavsPrevText(): string | null {
    return this.text(Automation.Prev);
  }

  get carouselNavsNext(): DebugElement | null {
    return this.getByAutomationId(Automation.Next);
  }

  get carouselNavsNextText(): string | null {
    return this.text(Automation.Next);
  }

  triggerCarouselNavsPrevClick(): void {
    this.triggerEventHandler(this.carouselNavsPrev, 'click');
  }

  triggerCarouselNavsNextClick(): void {
    this.triggerEventHandler(this.carouselNavsNext, 'click');
  }
}
