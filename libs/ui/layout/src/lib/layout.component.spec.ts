import { Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { LayoutService } from '@banshop/core/layout/service';
import { providerOf } from '@banshop/core/testing';
import { ContainerModule } from '@banshop/ui/container';

import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { LayoutComponent } from './layout.component';
import { LayoutComponentPo } from './layout.component.po';

describe('LayoutComponent', () => {
  let pageObject: LayoutComponentPo;
  let fixture: ComponentFixture<LayoutComponent>;
  let layoutServiceMock: LayoutService;
  let layoutType$: BehaviorSubject<string>;

  beforeEach(() => {
    layoutServiceMock = mock(LayoutService);

    layoutType$ = new BehaviorSubject<string>(Breakpoints.Handset);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(HeaderModule),
        MockModule(FooterModule),
        MockModule(SidebarModule),
        MockModule(ContainerModule),
        MockModule(MenuModule),
      ],
      declarations: [LayoutComponent],
      providers: [providerOf(LayoutService, layoutServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(layoutServiceMock.layoutType$).thenReturn(layoutType$);

    fixture = TestBed.createComponent(LayoutComponent);
    pageObject = new LayoutComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.handset).toBeTruthy();
  });

  it('should show handset', () => {
    fixture.detectChanges();

    expect(pageObject.handset).toBeTruthy();
    expect(pageObject.tablet).toBeFalsy();
    expect(pageObject.web).toBeFalsy();
  });

  it('should show tablet', () => {
    layoutType$.next(Breakpoints.Tablet);
    fixture.detectChanges();

    expect(pageObject.handset).toBeFalsy();
    expect(pageObject.tablet).toBeTruthy();
    expect(pageObject.web).toBeFalsy();
  });

  it('should show web', () => {
    layoutType$.next(Breakpoints.Web);
    fixture.detectChanges();

    expect(pageObject.handset).toBeFalsy();
    expect(pageObject.tablet).toBeFalsy();
    expect(pageObject.web).toBeTruthy();
  });
});
