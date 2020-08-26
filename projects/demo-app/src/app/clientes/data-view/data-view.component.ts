import { Component, OnInit } from '@angular/core';

import { QueryViewService } from 'query-view';

import { TabelaQueryViewComponent } from '../tabela-query-view/tabela-query-view.component';
import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  providers: [QueryViewService],
})
export class DataViewComponent implements OnInit {
  table = TabelaQueryViewComponent;
  filter = FiltroComponent;

  constructor() {}

  ngOnInit(): void {}
}
