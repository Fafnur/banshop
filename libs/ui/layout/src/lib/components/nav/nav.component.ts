import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
