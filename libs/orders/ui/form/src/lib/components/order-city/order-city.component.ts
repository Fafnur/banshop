import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'banshop-order-city',
  templateUrl: './order-city.component.html',
  styleUrls: ['./order-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderCityComponent {
  @Input() control!: FormControl;
}
