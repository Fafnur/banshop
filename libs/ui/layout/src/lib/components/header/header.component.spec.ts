import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@banshop/ui/container';

import { LogoModule } from '../logo/logo.module';
import { ActionsModule } from './actions/actions.module';
import { HeaderComponent } from './header.component';
import { HeaderComponentPo } from './header.component.po';

describe('HeaderComponent', () => {
  let pageObject: HeaderComponentPo;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(ContainerModule), MockModule(LogoModule), MockModule(ActionsModule)],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    pageObject = new HeaderComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.logo).toBeTruthy();
    expect(pageObject.actions).toBeTruthy();
  });
});
