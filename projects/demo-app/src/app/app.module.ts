import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FuncionariosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
