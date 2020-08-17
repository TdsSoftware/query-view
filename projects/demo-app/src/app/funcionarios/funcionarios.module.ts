import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TabelaComponent } from './tabela/tabela.component';
import { DataViewComponent } from './data-view/data-view.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';

@NgModule({
  declarations: [TabelaComponent, DataViewComponent, FiltroComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FuncionariosRoutingModule,
  ],
})
export class FuncionariosModule {}
