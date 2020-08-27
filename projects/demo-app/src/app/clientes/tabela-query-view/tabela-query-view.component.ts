import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { QueryViewService, Data, Ordenacao, Paginacao } from 'query-view';

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
  direction: 'desc' = 'desc';

  constructor(
    private clientesService: ClientesService,
    private queryViewService: QueryViewService
  ) {}

  ngOnInit() {
    this.queryViewService.paginar({ tamanho: this.pageSize });
    this.queryViewService.ordenar({
      ativo: this.active,
      direcao: this.direction,
    });

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
