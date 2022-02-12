import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { TermsComponent } from './terms.component';

describe('TermsComponent', () => {
  let component: TermsComponent;
  let fixture: ComponentFixture<TermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(NavigationPipesModule)],
      declarations: [TermsComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent.trim()).toBe('Terms of sale');
  });
});
