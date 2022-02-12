import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@banshop/ui/container';

import { CopyrightModule } from './components/copyright/copyright.module';
import { TermsModule } from './components/terms/terms.module';
import { FooterComponent } from './footer.component';
import { FooterComponentPo } from './footer.component.po';

describe('FooterComponent', () => {
  let pageObject: FooterComponentPo;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(ContainerModule), MockModule(CopyrightModule), MockModule(TermsModule)],
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    pageObject = new FooterComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.copyright).toBeTruthy();
    expect(pageObject.terms).toBeTruthy();
  });
});
