import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent {}
