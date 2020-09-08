import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { QueryViewService, Data, Ordenacao, Paginacao } from 'query-view';

import { Funcionario } from '../funcionarios';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-tabela-query-view',
  templateUrl: './tabela-query-view.component.html',
  styleUrls: ['./tabela-query-view.component.scss'],
})
export class TabelaQueryViewComponent implements OnInit {
  dataSource$: Observable<Data<Funcionario>>;
  pageSize: number = 25;

  constructor(
    private queryViewService: QueryViewService,
    private funcionariosService: FuncionariosService
  ) {}

  ngOnInit(): void {
    this.queryViewService.paginar({ tamanho: this.pageSize });

    this.dataSource$ = this.queryViewService.dataSource$((param) =>
      this.funcionariosService.getAll(param)
    );
  }

  sort(event: Ordenacao) {
    this.queryViewService.ordenar(event);
  }

  page(event: Paginacao) {
    this.queryViewService.paginar(event);
  }
}
