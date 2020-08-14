import { Component, OnInit, Type } from '@angular/core';

import { DataViewStateService } from 'data-view';

import { TabelaComponent } from '../tabela/tabela.component';
import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  selector: 'app-data-view-funcionario',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  providers: [DataViewStateService],
})
export class DataViewComponent implements OnInit {
  table: Type<any> = TabelaComponent;
  filter: Type<any> = FiltroComponent;

  constructor() {}

  ngOnInit(): void {}
}
