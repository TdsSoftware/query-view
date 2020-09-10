import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { AppRoutingModule } from './app-routing.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FuncionariosModule,
    ToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: '3000' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
