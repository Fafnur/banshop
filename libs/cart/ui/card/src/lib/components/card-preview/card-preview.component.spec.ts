import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { mock, when } from 'ts-mockito';

import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';
import { providerOf } from '@banshop/core/testing';
import { CarouselModule } from '@banshop/ui/carousel';

import { CardPreviewComponent } from './card-preview.component';
import { CardPreviewComponentPo } from './card-preview.component.po';

describe('CardPreviewComponent', () => {
  let pageObject: CardPreviewComponentPo;
  let fixture: ComponentFixture<CardPreviewComponent>;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(CarouselModule)],
      declarations: [CardPreviewComponent],
      providers: [providerOf(NavigationService, navigationServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
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
