import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';

@Component({
  selector: 'banshop-server-error-page',
  templateUrl: './server-error-page.component.html',
  styleUrls: ['./server-error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerErrorPageComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
