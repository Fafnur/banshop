import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

@NgModule({
  imports: [HttpClientModule, !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []],
  providers: [],
})
export class AppCoreModule {}
