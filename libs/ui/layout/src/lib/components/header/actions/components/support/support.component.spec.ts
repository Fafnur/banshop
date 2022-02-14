import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { SupportComponent } from './support.component';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MockModule(NavigationPipesModule),
        MockModule(MatButtonModule),
        MockModule(MatIconModule),
      ],
      declarations: [SupportComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
