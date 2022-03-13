import { MatDialog } from '@angular/material/dialog';
import { deepEqual, instance, mock, verify } from 'ts-mockito';

import { LayoutService } from '@banshop/core/layout/service';
import { PRODUCT_STUB } from '@banshop/products/common';

import { ProductAddToBagService } from './product-add-to-bag.service';
import { ProductAddToBagDialogComponent } from './product-add-to-bag-dialog/product-add-to-bag-dialog.component';

describe('ProductAddToBagService', () => {
  let service: ProductAddToBagService;
  let layoutServiceMock: LayoutService;
  let matDialogMock: MatDialog;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    layoutServiceMock = mock(LayoutService);
    service = new ProductAddToBagService(instance(matDialogMock), instance(layoutServiceMock));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show success popup', () => {
    service.open(PRODUCT_STUB);

    verify(
      matDialogMock.open(ProductAddToBagDialogComponent, deepEqual({ data: { product: PRODUCT_STUB }, width: '800px', disableClose: true }))
    ).once();
  });
});
