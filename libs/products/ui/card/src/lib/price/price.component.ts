import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent {}
