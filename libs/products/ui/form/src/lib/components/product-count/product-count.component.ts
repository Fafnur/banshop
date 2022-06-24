import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'banshop-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCountComponent {
  @Input() control!: UntypedFormControl;

  readonly counts: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
}
