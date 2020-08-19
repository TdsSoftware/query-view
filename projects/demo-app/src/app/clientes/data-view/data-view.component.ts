import { Component, OnInit } from '@angular/core';

import { DataViewService } from 'data-view';

import { TabelaComponent } from '../tabela/tabela.component';
import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  providers: [DataViewService],
})
export class DataViewComponent implements OnInit {
  table = TabelaComponent;
  filter = FiltroComponent;

  constructor() {}

  ngOnInit(): void {}
}
