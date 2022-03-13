import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';
import { PRODUCT_STUB } from '@banshop/products/common';

import { CardTitleComponent } from './card-title.component';

describe('CardTitleComponent', () => {
  let component: CardTitleComponent;
  let fixture: ComponentFixture<CardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(NavigationPipesModule)],
      declarations: [CardTitleComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTitleComponent);
    component = fixture.componentInstance;
    component.product = PRODUCT_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
