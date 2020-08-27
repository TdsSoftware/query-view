import { Component, OnInit } from '@angular/core';

import { QueryViewService } from 'query-view';
import { TabelaQueryViewComponent } from '../tabela-query-view/tabela-query-view.component';

@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss'],
  providers: [QueryViewService],
})
export class QueryViewComponent implements OnInit {
  table = TabelaQueryViewComponent;

  constructor() {}

  ngOnInit(): void {}
}
