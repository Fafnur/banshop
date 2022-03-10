import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banshop/core/navigation/common';
import { NavigationPipesModule } from '@banshop/core/navigation/ui/pipes';

import { OrderNotifyFailureComponent } from './order-notify-failure.component';
import { OrderNotifyFailureComponentPo } from './order-notify-failure.component.po';

describe('OrderNotifyFailureComponent', () => {
  let pageObject: OrderNotifyFailureComponentPo;
  let fixture: ComponentFixture<OrderNotifyFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MockModule(MatDialogModule),
        MockModule(MatButtonModule),
        MockModule(NavigationPipesModule),
      ],
      declarations: [OrderNotifyFailureComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNotifyFailureComponent);
    pageObject = new OrderNotifyFailureComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Order error!');
    /* eslint-disable max-len */
    expect(pageObject.descriptionText).toBe(
      'An error occurred when making an order. Check the entered data and try to make the order again. If the problem persists, contact support.'
    );
    /* eslint-enable max-len */
    expect(pageObject.closeText).toBe('Close');
  });
});
