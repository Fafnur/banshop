import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';

@Component({
  selector: 'banshop-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
