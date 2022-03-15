import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

import { CarouselComponent } from './carousel.component';

enum Automation {
  Carousel = 'carousel',
  CarouselSlide = 'carousel-slide',
  CarouselDots = 'carousel-dots',
  CarouselNavs = 'carousel-navs',
}

export class CarouselComponentPo extends PageObject {
  get carousel(): DebugElement | null {
    return this.getByAutomationId(Automation.Carousel);
  }

  get carouselComponent(): CarouselComponent | null {
    return this.carousel?.componentInstance;
  }

  get carouselSlides(): DebugElement[] {
    return this.getAllByAutomationId(Automation.CarouselSlide);
  }

  get carouselDots(): DebugElement | null {
    return this.getByAutomationId(Automation.CarouselDots);
  }

  get carouselNavs(): DebugElement | null {
    return this.getByAutomationId(Automation.CarouselNavs);
  }

  get carouselActiveSlideIndex(): number | null {
    return this.carouselComponent?.active ?? null;
  }

  triggerCarouselSlideFirstClick(): void {
    this.triggerEventHandler(this.carouselSlides[0], 'clicked');
  }

  triggerCarouselDotsClick(eventObj: number): void {
    this.triggerEventHandler(this.carouselDots, 'selected', eventObj);
  }

  triggerCarouselNavsNextClick(): void {
    this.triggerEventHandler(this.carouselNavs, 'next');
  }

  triggerCarouselNavsPrevClick(): void {
    this.triggerEventHandler(this.carouselNavs, 'prev');
  }
}
