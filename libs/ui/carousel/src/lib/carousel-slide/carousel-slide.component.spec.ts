import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModule } from '@banshop/ui/image';

import { CarouselSlideComponent } from './carousel-slide.component';
import { CarouselSlideComponentPo } from './carousel-slide.component.po';

@Component({
  template: `<banshop-carousel-slide automation-id="carousel-slide" [image]="image"></banshop-carousel-slide>`,
})
export class WrapperComponent {
  image = '/1.jpg';
}

describe('CarouselSlideComponent', () => {
  let pageObject: CarouselSlideComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageModule],
      declarations: [CarouselSlideComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CarouselSlideComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.carouselSlideImageStyles).toBe('url(/1.jpg)');
  });
});
