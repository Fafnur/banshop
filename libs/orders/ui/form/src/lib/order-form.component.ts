import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, take, takeUntil, tap } from 'rxjs';

import { NavigationService } from '@banshop/core/navigation/service';
import { DestroyService } from '@banshop/core/utils/destroy';
import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { CustomerField } from '@banshop/orders/common';
import { OrderFacade } from '@banshop/orders/state';
import { OrderNotifyService } from '@banshop/orders/ui/notify';

@Component({
  selector: 'banshop-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class OrderFormComponent implements OnInit {
  readonly fields = CustomerField;

  form!: FormGroup;
  submitted = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly orderFacade: OrderFacade,
    private readonly orderNotifyService: OrderNotifyService,
    private readonly navigationService: NavigationService,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      [CustomerField.Name]: new FormControl(null, [Validators.required]),
      [CustomerField.Phone]: new FormControl(null, [Validators.required]),
      [CustomerField.Email]: new FormControl(null, [Validators.required, Validators.email]),
      [CustomerField.City]: new FormControl(null, [Validators.required]),
      [CustomerField.Address]: new FormControl(null, [Validators.required]),
      [CustomerField.Postcode]: new FormControl(null, [Validators.required]),
    });

    this.orderFacade.customer$
      .pipe(
        take(1),
        isNotNullOrUndefined(),
        tap((customer) => this.form.patchValue(customer)),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.form.valueChanges
      .pipe(
        isNotNullOrUndefined(),
        debounceTime(1000),
        tap((customer) => this.orderFacade.updateCustomer(customer)),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.orderFacade.createOrderFailure$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.orderNotifyService.openFailureDialog();
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.orderFacade.createOrderSuccess$
      .pipe(
        tap((orderDetails) => {
          this.submitted = false;
          this.orderNotifyService.openSuccessDialog(orderDetails);
          void this.navigationService.navigateByUrl(this.navigationService.getPaths().home);
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid && !this.submitted) {
      this.submitted = true;
      this.orderFacade.createOrder(this.form.value);
    }

    this.changeDetectorRef.markForCheck();
  }
}
