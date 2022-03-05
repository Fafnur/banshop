import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPriceComponent {}
