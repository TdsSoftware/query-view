import { Component, OnInit } from '@angular/core';

import { TabelaComponent } from '../../usuarios/tabela/tabela.component';
import { DataViewService } from 'data-view';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  providers: [DataViewService],
})
export class DataViewComponent implements OnInit {
  table = TabelaComponent;

  constructor() {}

  ngOnInit(): void {}
}
