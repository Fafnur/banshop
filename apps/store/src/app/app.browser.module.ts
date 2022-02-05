import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [BrowserAnimationsModule, AppModule],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
