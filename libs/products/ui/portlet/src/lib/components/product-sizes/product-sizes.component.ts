import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'banshop-product-sizes',
  templateUrl: './product-sizes.component.html',
  styleUrls: ['./product-sizes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSizesComponent {
  @Input() sizes!: number[];
  @Input() control!: UntypedFormControl;

  active!: number;

  onSelect(size: number): void {
    this.control.patchValue(size);
    this.active = size;
  }
}
