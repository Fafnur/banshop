import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'banshop-order-address',
  templateUrl: './order-address.component.html',
  styleUrls: ['./order-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderAddressComponent {
  @Input() control!: FormControl;
}
