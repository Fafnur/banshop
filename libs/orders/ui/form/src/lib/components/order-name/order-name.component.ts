import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'banshop-order-name',
  templateUrl: './order-name.component.html',
  styleUrls: ['./order-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderNameComponent {
  @Input() control!: UntypedFormControl;
}
