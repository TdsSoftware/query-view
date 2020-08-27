import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

import { Paginacao, Ordenacao } from 'query-view';

import { Funcionario } from '../funcionarios';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  @Input() funcionarios: Funcionario[] = [];
  @Input() registros: number = 0;
  @Output() paginacao = new EventEmitter<Paginacao>();
  @Output() ordenacao = new EventEmitter<Ordenacao>();

  colunas = ['id', 'nome', 'sobrenome', 'idade', 'empresa', 'email'];

  constructor() {}

  ngOnInit() {}

  sort(sort: Sort) {
    this.ordenacao.emit({ ativo: sort.active, direcao: sort.direction });
  }

  page(page: PageEvent) {
    this.paginacao.emit({ pagina: page.pageIndex, tamanho: page.pageSize });
  }

  setColor(idade: number) {
    const min = 20;
    const max = 45;
    idade = idade < min ? min : idade > max ? max : idade;
    const value = ((idade - min) * 100) / (max - min) / 100;
    const hue = ((1 - value) * 120).toString(10);
    return ['hsl(', hue, ', 100%, 50%)'].join('');
  }
}
