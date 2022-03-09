import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'banshop-order-phone',
  templateUrl: './order-phone.component.html',
  styleUrls: ['./order-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderPhoneComponent {
  @Input() control!: FormControl;
}
