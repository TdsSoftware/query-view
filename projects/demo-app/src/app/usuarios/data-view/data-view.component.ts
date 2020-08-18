import { Component, OnInit } from '@angular/core';

import { TabelaComponent } from '../../usuarios/tabela/tabela.component';
import { DataViewStateService } from 'data-view';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  providers: [DataViewStateService],
})
export class DataViewComponent implements OnInit {
  table = TabelaComponent;

  constructor() {}

  ngOnInit(): void {}
}
