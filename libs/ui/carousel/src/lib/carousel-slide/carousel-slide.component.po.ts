import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  CarouselSlide = 'carousel-slide',
  CarouselSlideImage = 'carousel-slide-image',
}

export class CarouselSlideComponentPo extends PageObject {
  get carouselSlide(): DebugElement | null {
    return this.getByAutomationId(Automation.CarouselSlide);
  }

  get carouselSlideImage(): DebugElement | null {
    return this.getByAutomationId(Automation.CarouselSlideImage);
  }

  get carouselSlideImageStyles(): string | null {
    return this.carouselSlideImage?.styles['background-image'] ?? null;
  }
}
