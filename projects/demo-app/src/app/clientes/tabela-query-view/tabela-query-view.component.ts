import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Data, Ordenacao, Paginacao } from 'core';
import { QueryViewService } from 'query-view';

import { Cliente } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-tabela-query-view',
  templateUrl: './tabela-query-view.component.html',
  styleUrls: ['./tabela-query-view.component.scss'],
})
export class TabelaQueryViewComponent implements OnInit {
  dataSource$: Observable<Data<Cliente>>;
  pageSize = 4;
  active = 'pais';

  constructor(
    private clientesService: ClientesService,
    private queryViewService: QueryViewService
  ) {}

  ngOnInit() {
    this.queryViewService.paginar({ tamanho: this.pageSize });
    this.queryViewService.ordenar({ ativo: this.active });

    this.dataSource$ = this.queryViewService.dataSource$((params) =>
      this.clientesService.getAll(params)
    );
  }

  sort(event: Ordenacao) {
    this.queryViewService.ordenar(event);
  }

  page(event: Paginacao) {
    this.queryViewService.paginar(event);
  }
}
