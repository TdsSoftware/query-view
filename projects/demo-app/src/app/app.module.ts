import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataViewModule } from 'data-view';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataViewModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
