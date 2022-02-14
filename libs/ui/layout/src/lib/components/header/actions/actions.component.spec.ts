import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ActionsComponent } from './actions.component';
import { ActionsComponentPo } from './actions.component.po';
import { CartModule } from './components/cart/cart.module';
import { PhoneModule } from './components/phone/phone.module';
import { SupportModule } from './components/support/support.module';

describe('ActionsComponent', () => {
  let pageObject: ActionsComponentPo;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(PhoneModule), MockModule(SupportModule), MockModule(CartModule)],
      declarations: [ActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    pageObject = new ActionsComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.phone).toBeTruthy();
    expect(pageObject.support).toBeTruthy();
    expect(pageObject.cart).toBeTruthy();
  });
});
