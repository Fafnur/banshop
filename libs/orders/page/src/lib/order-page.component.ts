import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  private form!: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly orderFacade: OrderFacade,
    private readonly navigationService: NavigationService
  ) {}

  onCreatedForm(form: FormGroup): void {
    this.form = form;
  }

  private redirect(): void {
    void this.navigationService.navigateByUrl(this.navigationService.getPaths().home);
  }
}
