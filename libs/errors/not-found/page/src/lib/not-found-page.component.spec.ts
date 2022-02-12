import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { ErrorCardModule } from '@banshop/errors/ui/card';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageComponentPo } from './not-found-page.component.po';

describe('NotFoundComponent', () => {
  let pageObject: NotFoundPageComponentPo;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MockModule(MatButtonModule),
        MockModule(ErrorCardModule),
        MockModule(NavigationPipesModule),
      ],
      declarations: [NotFoundPageComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    pageObject = new NotFoundPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeDefined();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.card).toBeTruthy();
    expect(pageObject.codeText).toBe('404');
    expect(pageObject.titleText).toBe('Страница не найдена');
    expect(pageObject.descriptionText).toBe('Извините, запрашиваемая страница не найдена.');
    expect(pageObject.links).toBeTruthy();
  });
});
