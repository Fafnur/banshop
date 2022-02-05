import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCoreModule } from './app-core.module';

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppCoreModule],
  declarations: [AppComponent],
})
export class AppModule {}
