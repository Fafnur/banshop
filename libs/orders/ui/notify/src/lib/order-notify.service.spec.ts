import { MatDialog } from '@angular/material/dialog';
import { deepEqual, instance, mock, verify } from 'ts-mockito';

import { ORDER_DETAILS_STUB } from '@banshop/orders/common';

import { OrderNotifyFailureComponent } from './component/order-notify-failure/order-notify-failure.component';
import { OrderNotifySuccessComponent } from './component/order-notify-success/order-notify-success.component';
import { OrderNotifyService } from './order-notify.service';

describe('OrderNotifyService', () => {
  let service: OrderNotifyService;
  let matDialogMock: MatDialog;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    service = new OrderNotifyService(instance(matDialogMock));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show failure popup', () => {
    service.openFailureDialog();

    verify(matDialogMock.open(OrderNotifyFailureComponent, deepEqual({ width: '500px' }))).once();
  });

  it('should show success popup', () => {
    service.openSuccessDialog(ORDER_DETAILS_STUB);

    verify(matDialogMock.open(OrderNotifySuccessComponent, deepEqual({ data: ORDER_DETAILS_STUB, width: '500px' }))).once();
  });
});
