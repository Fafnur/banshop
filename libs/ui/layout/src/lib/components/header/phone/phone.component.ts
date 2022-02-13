import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from '@banshop/core/environments/service';

@Component({
  selector: 'banshop-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneComponent implements OnInit {
  phone!: string;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.phone = this.environmentService.environments.phone;
  }
}
