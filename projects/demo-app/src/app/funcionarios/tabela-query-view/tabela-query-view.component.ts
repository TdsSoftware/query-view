import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { QueryViewService } from 'query-view';
import { Data, Ordenacao, Paginacao } from 'core';

import { Funcionario } from '../funcionarios';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-tabela-query-view',
  templateUrl: './tabela-query-view.component.html',
  styleUrls: ['./tabela-query-view.component.scss'],
})
export class TabelaQueryViewComponent implements OnInit {
  dataSource$: Observable<Data<Funcionario>>;

  constructor(
    private queryViewService: QueryViewService,
    private funcionariosService: FuncionariosService
  ) {}

  ngOnInit(): void {
    this.dataSource$ = this.queryViewService.parametros$.pipe(
      switchMap((parametros) => this.funcionariosService.getAll(parametros))
    );
  }

  sort(event: Ordenacao) {
    this.queryViewService.ordenar(event);
  }

  page(event: Paginacao) {
    this.queryViewService.paginar(event);
  }
}
