import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { DataViewComponent } from './data-view/data-view.component';
import { TabelaComponent } from './tabela/tabela.component';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  declarations: [DataViewComponent, TabelaComponent, FiltroComponent],
  imports: [CommonModule, ClientesRoutingModule, SharedModule],
})
export class ClientesModule {}
