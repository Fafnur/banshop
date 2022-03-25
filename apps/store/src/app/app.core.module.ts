import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CartStateModule } from '@banshop/cart/state';
import { ENVIRONMENTS } from '@banshop/core/environments/service';
import { MetaStateModule } from '@banshop/core/meta/state';
import { NAVIGATION_PATHS, PATHS } from '@banshop/core/navigation/common';
import { RootStoreModule } from '@banshop/core/store/root';
import { ErrorsInterceptorsModule } from '@banshop/errors/interceptors';
import { ProductsStateModule } from '@banshop/products/state';
import { LocalizationModule } from '@banshop/russian/localization';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    LocalizationModule,
    RootStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : [],
    CartStateModule,
    ErrorsInterceptorsModule,
    MetaStateModule,
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
