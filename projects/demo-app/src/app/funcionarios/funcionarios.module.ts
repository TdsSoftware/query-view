import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TabelaComponent } from './tabela/tabela.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { QueryViewComponent } from './query-view/query-view.component';

import { QueryViewModule } from 'query-view';
import { TabelaQueryViewComponent } from './tabela-query-view/tabela-query-view.component';

@NgModule({
  declarations: [TabelaComponent, FiltroComponent, QueryViewComponent, TabelaQueryViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FuncionariosRoutingModule,
    QueryViewModule,
  ],
})
export class FuncionariosModule {}
