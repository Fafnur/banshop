import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { takeUntil, tap } from 'rxjs';

import { CartProduct } from '@banshop/cart/common';
import { CartFacade } from '@banshop/cart/state';
import { DestroyService } from '@banshop/core/utils/destroy';
import { isNotNullOrUndefined } from '@banshop/core/utils/operators';

@Component({
  selector: 'banshop-card-count',
  templateUrl: './card-count.component.html',
  styleUrls: ['./card-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class CardCountComponent implements OnInit {
  @Input() cartProduct!: CartProduct;

  control!: UntypedFormControl;

  constructor(private readonly cartFacade: CartFacade, private readonly destroy$: DestroyService) {}

  ngOnInit(): void {
    this.control = new UntypedFormControl(this.cartProduct.count);

    this.control.valueChanges
      .pipe(
        isNotNullOrUndefined(),
        tap((count) => this.cartFacade.changeProduct({ ...this.cartProduct, count })),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
