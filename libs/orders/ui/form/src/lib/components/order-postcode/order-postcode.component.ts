import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'banshop-order-postcode',
  templateUrl: './order-postcode.component.html',
  styleUrls: ['./order-postcode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderPostcodeComponent {
  @Input() control!: FormControl;
}
