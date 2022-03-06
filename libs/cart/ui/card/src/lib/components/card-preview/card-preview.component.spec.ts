import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { CarouselModule } from '@banshop/ui/carousel';

import { CardPreviewComponent } from './card-preview.component';
import { CardPreviewComponentPo } from './card-preview.component.po';

describe('CardPreviewComponent', () => {
  let pageObject: CardPreviewComponentPo;
  let fixture: ComponentFixture<CardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(CarouselModule)],
      declarations: [CardPreviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPreviewComponent);
    pageObject = new CardPreviewComponentPo(fixture);
    fixture.componentInstance.images = ['/img.jpg'];
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.carousel).toBeTruthy();
  });
});
