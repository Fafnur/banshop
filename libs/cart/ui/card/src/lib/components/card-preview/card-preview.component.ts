import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'banshop-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPreviewComponent {
  @Input() images: string[] = [];
}
