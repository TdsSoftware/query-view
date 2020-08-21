import { Component, OnInit } from '@angular/core';
import { TabelaComponent } from '../tabela/tabela.component';
import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss'],
})
export class QueryViewComponent implements OnInit {
  table = TabelaComponent;
  filter = FiltroComponent;
  constructor() {}

  ngOnInit(): void {}
}
