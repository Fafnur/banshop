import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavigationService } from '@banshop/core/navigation/service';
import { OrderFacade } from '@banshop/orders/state';

@Component({
  selector: 'banshop-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderPageComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly orderFacade: OrderFacade,
    private readonly navigationService: NavigationService
  ) {}

  private redirect(): void {
    void this.navigationService.navigateByUrl(this.navigationService.getPaths().home);
  }
}
