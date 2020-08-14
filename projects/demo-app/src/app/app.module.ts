import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataViewModule } from 'data-view';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
