import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'banshop-order-email',
  templateUrl: './order-email.component.html',
  styleUrls: ['./order-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderEmailComponent {
  @Input() control!: UntypedFormControl;
}
