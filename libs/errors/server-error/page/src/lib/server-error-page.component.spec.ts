import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { ErrorCardModule } from '@banshop/errors/ui/card';
import { LinkModule } from '@banshop/ui/link';

import { ServerErrorPageComponent } from './server-error-page.component';
import { ServerErrorPageComponentPo } from './server-error-page.component.po';

describe('ServerErrorPageComponent', () => {
  let pageObject: ServerErrorPageComponentPo;
  let fixture: ComponentFixture<ServerErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MockModule(ErrorCardModule),
        MockModule(NavigationPipesModule),
        MockModule(MatButtonModule),
        MockModule(LinkModule),
      ],
      declarations: [ServerErrorPageComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerErrorPageComponent);
    pageObject = new ServerErrorPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeDefined();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.card).toBeTruthy();
    expect(pageObject.codeText).toBe('500');
    expect(pageObject.titleText).toBe('Internal server error');
    expect(pageObject.descriptionText).toBe(
      // eslint-disable-next-line max-len
      'If you’re facing some issues while using our service you’re unable to solve yourself, please contact our customer service department by sending a message to support. We’ll try to do our best as soon as we’ll consider your appeal.'
    );
    expect(pageObject.links).toBeTruthy();
  });
});
