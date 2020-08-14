import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TabelaComponent } from './tabela/tabela.component';
import { DataViewComponent } from './data-view/data-view.component';

@NgModule({
  declarations: [TabelaComponent, DataViewComponent],
  imports: [CommonModule, SharedModule],
  exports: [DataViewComponent],
})
export class FuncionariosModule {}
