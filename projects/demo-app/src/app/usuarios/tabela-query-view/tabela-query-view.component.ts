import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { QueryViewService, Ordenacao, Data } from 'query-view';

import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios';
import { TabelaComponent } from '../tabela/tabela.component';

@Component({
  selector: 'app-tabela-query-view',
  templateUrl: './tabela-query-view.component.html',
  styleUrls: ['./tabela-query-view.component.scss'],
})
export class TabelaQueryViewComponent implements OnInit {
  dataSource$: Observable<Data<Usuario>>;
  tabela = TabelaComponent;

  constructor(
    private usuariosService: UsuariosService,
    private queryViewService: QueryViewService
  ) {}

  ngOnInit(): void {
    this.dataSource$ = this.queryViewService.dataSource$((params) =>
      this.usuariosService.getAll(params)
    );
  }

  sort(event: Ordenacao) {
    this.queryViewService.ordenar(event);
  }
}
