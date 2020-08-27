import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Ordenacao } from 'core';

import { Usuario } from '../usuarios';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  @Input() usuarios: Usuario[];
  @Input() registros: number;
  @Output() ordenacao = new EventEmitter<Ordenacao>();

  displayedColumns = ['id', 'avatar', 'username', 'email'];

  constructor() {}

  ngOnInit(): void {}

  sort(event: Sort) {
    this.ordenacao.emit({ ativo: event.active, direcao: event.direction });
  }
}
