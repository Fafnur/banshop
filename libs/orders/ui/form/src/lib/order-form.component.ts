import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take, takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banshop/core/utils/destroy';
import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { CustomerField } from '@banshop/orders/common';
import { OrderFacade } from '@banshop/orders/state';

@Component({
  selector: 'banshop-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class OrderFormComponent implements OnInit {
  @Output() created = new EventEmitter<FormGroup>();

  form!: FormGroup;
  submitted = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly orderFacade: OrderFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      [CustomerField.Name]: new FormControl(null, [Validators.required]),
      [CustomerField.Phone]: new FormControl(null, [Validators.required]),
      [CustomerField.Email]: new FormControl(null, [Validators.required]),
      [CustomerField.City]: new FormControl(null, [Validators.required]),
      [CustomerField.Address]: new FormControl(null, [Validators.required]),
      [CustomerField.Postcode]: new FormControl(null, [Validators.required]),
    });
    this.created.emit(this.form);

    this.form.valueChanges
      .pipe(
        tap(() => {
          this.isShowError = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.orderFacade.customer$.pipe(
      take(1),
      isNotNullOrUndefined(),
      tap((customer) => this.form.patchValue(customer)),
      takeUntil(this.destroy$)
    );

    this.orderFacade.createOrderFailure$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.orderFacade.createOrderSuccess$
      .pipe(
        tap(() => {
          this.submitted = false;

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
