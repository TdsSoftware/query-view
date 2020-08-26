import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QueryViewModule } from 'query-view';

import { SharedModule } from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { DataViewComponent } from './data-view/data-view.component';
import { TabelaComponent } from './tabela/tabela.component';
import { FiltroComponent } from './filtro/filtro.component';
import { HomeComponent } from './home/home.component';
import { TabelaQueryViewComponent } from './tabela-query-view/tabela-query-view.component';

@NgModule({
  declarations: [
    DataViewComponent,
    TabelaComponent,
    FiltroComponent,
    HomeComponent,
    TabelaQueryViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ClientesRoutingModule,
    QueryViewModule,
  ],
})
export class ClientesModule {}
