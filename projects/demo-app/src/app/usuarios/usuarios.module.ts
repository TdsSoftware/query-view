import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataViewModule } from 'data-view';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { DataViewComponent } from './data-view/data-view.component';
import { SharedModule } from '../shared/shared.module';
import { TabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [DataViewComponent, TabelaComponent],
  imports: [CommonModule, UsuariosRoutingModule, SharedModule, DataViewModule],
})
export class UsuariosModule {}
