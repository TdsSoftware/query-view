import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

import { Paginacao, Ordenacao } from 'core';

import { Cliente } from '../clientes';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  @Input() clientes: Cliente[] = [];
  @Input() registros: number = 0;
  @Input() tamanho = 50;
  @Input() sortActive: string;
  @Input() sortDirection: string;
  @Input() height = 'unset';
  @Output() paginacao = new EventEmitter<Paginacao>();
  @Output() ordenacao = new EventEmitter<Ordenacao>();

  colunas: string[] = ['id', 'empresa', 'pais', 'moeda', 'departamento'];

  constructor() {}

  ngOnInit() {}

  sort(event: Sort) {
    this.ordenacao.emit({ ativo: event.active, direcao: event.direction });
  }

  page(page: PageEvent) {
    this.paginacao.emit({ pagina: page.pageIndex, tamanho: page.pageSize });
  }
}
