import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LocalizationModule } from '@banshop/russian/localization';

import { AppComponent } from './app.component';
import { AppCoreModule } from './app.core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), LocalizationModule, AppRoutingModule, AppCoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
