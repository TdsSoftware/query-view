import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryViewModule } from 'query-view';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { DataViewComponent } from './data-view/data-view.component';
import { SharedModule } from '../shared/shared.module';
import { TabelaComponent } from './tabela/tabela.component';
import { TabelaQueryViewComponent } from './tabela-query-view/tabela-query-view.component';

@NgModule({
  declarations: [DataViewComponent, TabelaComponent, TabelaQueryViewComponent],
  imports: [CommonModule, UsuariosRoutingModule, SharedModule, QueryViewModule],
})
export class UsuariosModule {}
