import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDescriptionComponent {}
