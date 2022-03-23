import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CartFacade } from '@banshop/cart/state';
import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { providerOf } from '@banshop/core/testing';

import { NavComponent } from './nav.component';
import { NavComponentPo } from './nav.component.po';
import { NavLinkModule } from './nav-link/nav-link.module';

describe('NavComponent', () => {
  let pageObject: NavComponentPo;
  let fixture: ComponentFixture<NavComponent>;
  let cartFacadeMock: CartFacade;
  let count$: ReplaySubject<number>;

  beforeEach(() => {
    cartFacadeMock = mock(CartFacade);
    count$ = new ReplaySubject<number>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MockModule(NavigationPipesModule),
        MockModule(MatButtonModule),
        MockModule(MatIconModule),
        MockModule(NavLinkModule),
        MockModule(MatBadgeModule),
      ],
      declarations: [NavComponent],
      providers: [PATHS_STUB, providerOf(CartFacade, cartFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(cartFacadeMock.count$).thenReturn(count$);

    fixture = TestBed.createComponent(NavComponent);
    pageObject = new NavComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.navLinks.length).toBe(5);
  });
});
