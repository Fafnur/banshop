import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@banshop/core/forms/mask';

@Component({
  selector: 'banshop-order-phone',
  templateUrl: './order-phone.component.html',
  styleUrls: ['./order-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderPhoneComponent implements OnInit {
  @Input() control!: UntypedFormControl;

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) {}

  ngOnInit(): void {
    this.mask = this.formMaskService.getPhoneMask();
  }
}
