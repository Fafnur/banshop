import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ENVIRONMENTS } from '@banshop/core/environments/service';
import { NAVIGATION_PATHS, PATHS } from '@banshop/core/navigation/common';
import { ProductsStateModule } from '@banshop/products/state';
import { LocalizationModule } from '@banshop/russian/localization';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    LocalizationModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : [],
    ProductsStateModule,
  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
    {
      provide: PATHS,
      useValue: NAVIGATION_PATHS,
    },
  ],
})
export class AppCoreModule {}
