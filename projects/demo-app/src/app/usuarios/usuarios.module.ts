import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryViewModule } from 'query-view';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { QueryViewComponent } from './query-view/query-view.component';
import { SharedModule } from '../shared/shared.module';
import { TabelaComponent } from './tabela/tabela.component';
import { TabelaQueryViewComponent } from './tabela-query-view/tabela-query-view.component';
import { BotoesSelecaoComponent } from './botoes-selecao/botoes-selecao.component';

@NgModule({
  declarations: [QueryViewComponent, TabelaComponent, TabelaQueryViewComponent, BotoesSelecaoComponent],
  imports: [CommonModule, UsuariosRoutingModule, SharedModule, QueryViewModule],
})
export class UsuariosModule {}
