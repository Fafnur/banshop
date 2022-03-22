import { MatDialog } from '@angular/material/dialog';
import { deepEqual, instance, mock, verify } from 'ts-mockito';

import { LayoutService } from '@banshop/core/layout/service';
import { PRODUCT_STUB } from '@banshop/products/common';

import { CartAddService } from './cart-add.service';
import { CartAddDialogComponent } from './cart-add-dialog/cart-add-dialog.component';

describe('CartAddService', () => {
  let service: CartAddService;
  let layoutServiceMock: LayoutService;
  let matDialogMock: MatDialog;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    layoutServiceMock = mock(LayoutService);

    service = new CartAddService(instance(matDialogMock), instance(layoutServiceMock));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show success popup', () => {
    service.add(PRODUCT_STUB);

    verify(
      matDialogMock.open(CartAddDialogComponent, deepEqual({ data: { product: PRODUCT_STUB }, width: '800px', disableClose: true }))
    ).once();
  });
});
