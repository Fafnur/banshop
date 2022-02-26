import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'banshop-product-size',
  templateUrl: './product-size.component.html',
  styleUrls: ['./product-size.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSizeComponent {
  @Input() control!: FormControl;
  @Input() sizes: number[] = [];
}
