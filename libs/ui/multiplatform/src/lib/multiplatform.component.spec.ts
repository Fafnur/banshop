import { Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { LayoutService } from '@banshop/core/layout/service';
import { providerOf } from '@banshop/core/testing';

import { MultiplatformComponent } from './multiplatform.component';

describe('MultiplatformComponent', () => {
  let fixture: ComponentFixture<MultiplatformComponent>;
  let layoutServiceMock: LayoutService;
  let layoutType$: BehaviorSubject<string>;

  beforeEach(() => {
    layoutServiceMock = mock(LayoutService);

    layoutType$ = new BehaviorSubject<string>(Breakpoints.Handset);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [MultiplatformComponent],
      providers: [providerOf(LayoutService, layoutServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(layoutServiceMock.layoutType$).thenReturn(layoutType$);

    fixture = TestBed.createComponent(MultiplatformComponent);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  // it('should show', () => {
  //   fixture.detectChanges();
  //
  //   expect(pageObject.handset).toBeTruthy();
  // });
});
