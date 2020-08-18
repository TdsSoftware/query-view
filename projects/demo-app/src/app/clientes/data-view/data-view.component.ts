import { Component, OnInit } from '@angular/core';

import { TabelaComponent } from '../tabela/tabela.component';
import { FiltroComponent } from '../filtro/filtro.component';
import { DataViewStateService } from 'data-view';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  providers: [DataViewStateService],
})
export class DataViewComponent implements OnInit {
  table = TabelaComponent;
  filter = FiltroComponent;

  constructor() {}

  ngOnInit(): void {}
}
