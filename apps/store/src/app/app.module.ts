import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { HammerModule } from '@banshop/core/hammer';
import { LocalizationModule } from '@banshop/russian/localization';

import { AppComponent } from './app.component';
import { AppCoreModule } from './app.core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'banshop' }),
    LocalizationModule,
    AppRoutingModule,
    AppCoreModule,
    HammerModule,
    BrowserTransferStateModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
