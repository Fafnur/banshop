import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ENVIRONMENTS } from '@banshop/core/environments/service';
import { LocalizationModule } from '@banshop/russian/localization';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    LocalizationModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : [],
  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
  ],
})
export class AppCoreModule {}
