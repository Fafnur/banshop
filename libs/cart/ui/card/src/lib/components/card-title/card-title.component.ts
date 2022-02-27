import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitleComponent {}
