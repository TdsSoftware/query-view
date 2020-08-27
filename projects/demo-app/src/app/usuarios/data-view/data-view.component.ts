import { Component, OnInit } from '@angular/core';

import { QueryViewService } from 'query-view';
import { TabelaQueryViewComponent } from '../tabela-query-view/tabela-query-view.component';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  providers: [QueryViewService],
})
export class DataViewComponent implements OnInit {
  table = TabelaQueryViewComponent;

  constructor() {}

  ngOnInit(): void {}
}
