import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { HTTP_ERROR_STUB } from '@banshop/core/api/service';
import { FormExtractsModule } from '@banshop/core/forms/extract';
import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';
import { providerOf } from '@banshop/core/testing';
import { Customer, ORDER_DETAILS_STUB, OrderDetails } from '@banshop/orders/common';
import { OrderFacade } from '@banshop/orders/state';
import { OrderNotifyModule, OrderNotifyService } from '@banshop/orders/ui/notify';
import { GridModule } from '@banshop/ui/grid';

import { OrderActionsModule } from './components/order-actions/order-actions.module';
import { OrderAddressModule } from './components/order-address/order-address.module';
import { OrderCityModule } from './components/order-city/order-city.module';
import { OrderEmailModule } from './components/order-email/order-email.module';
import { OrderNameModule } from './components/order-name/order-name.module';
import { OrderPhoneModule } from './components/order-phone/order-phone.module';
import { OrderPostcodeModule } from './components/order-postcode/order-postcode.module';
import { OrderFormComponent } from './order-form.component';
import { OrderFormComponentPo } from './order-form.component.po';

describe('OrderFormComponent', () => {
  let pageObject: OrderFormComponentPo;
  let fixture: ComponentFixture<OrderFormComponent>;
  let orderFacadeMock: OrderFacade;
  let orderNotifyServiceMock: OrderNotifyService;
  let navigationServiceMock: NavigationService;

  let customer$: ReplaySubject<Customer | null>;
  let createOrderFailure$: ReplaySubject<HttpErrorResponse>;
  let createOrderSuccess$: ReplaySubject<OrderDetails>;

  beforeEach(() => {
    orderFacadeMock = mock(OrderFacade);
    orderNotifyServiceMock = mock(OrderNotifyService);
    navigationServiceMock = mock(NavigationService);

    customer$ = new ReplaySubject<Customer | null>(1);
    createOrderFailure$ = new ReplaySubject<HttpErrorResponse>(1);
    createOrderSuccess$ = new ReplaySubject<OrderDetails>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MockModule(ReactiveFormsModule),
        MockModule(GridModule),
        MockModule(MatCardModule),
        MockModule(MatButtonModule),
        MockModule(OrderNotifyModule),
        MockModule(OrderAddressModule),
        MockModule(OrderCityModule),
        MockModule(OrderEmailModule),
        MockModule(OrderNameModule),
        MockModule(OrderPhoneModule),
        MockModule(OrderPostcodeModule),
        MockModule(OrderActionsModule),
        MockModule(FormExtractsModule),
      ],
      declarations: [OrderFormComponent],
      providers: [
        providerOf(OrderFacade, orderFacadeMock),
        providerOf(OrderNotifyService, orderNotifyServiceMock),
        providerOf(NavigationService, navigationServiceMock),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    when(orderFacadeMock.customer$).thenReturn(customer$);
    when(orderFacadeMock.createOrderFailure$).thenReturn(createOrderFailure$);
    when(orderFacadeMock.createOrderSuccess$).thenReturn(createOrderSuccess$);

    fixture = TestBed.createComponent(OrderFormComponent);
    pageObject = new OrderFormComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.form).toBeTruthy();
    expect(pageObject.city).toBeTruthy();
    expect(pageObject.address).toBeTruthy();
    expect(pageObject.postcode).toBeTruthy();
    expect(pageObject.phone).toBeTruthy();
    expect(pageObject.email).toBeTruthy();
    expect(pageObject.submitText).toBe('Order');
  });

  it('should show success popup and redirect', () => {
    fixture.detectChanges();

    createOrderSuccess$.next(ORDER_DETAILS_STUB);

    verify(orderNotifyServiceMock.openSuccessDialog(deepEqual(ORDER_DETAILS_STUB))).once();
    verify(navigationServiceMock.navigateByUrl(NAVIGATION_PATHS.home)).once();
  });

  it('should show failure popup', () => {
    fixture.detectChanges();

    createOrderFailure$.next(HTTP_ERROR_STUB);

    verify(orderNotifyServiceMock.openFailureDialog()).once();
  });
});
