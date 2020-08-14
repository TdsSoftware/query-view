import { Component, OnInit, Type } from '@angular/core';
import { TabelaComponent } from '../tabela/tabela.component';

@Component({
  selector: 'app-data-view-funcionario',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
})
export class DataViewComponent implements OnInit {
  tabela: Type<any> = TabelaComponent;

  constructor() {}

  ngOnInit(): void {}
}
