import { Component, OnInit } from '@angular/core';

import { SelectionTableService } from '../../shared/selection-table/selection-table.service';
import { Usuario } from '../usuarios';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-botoes-selecao',
  templateUrl: './botoes-selecao.component.html',
  styleUrls: ['./botoes-selecao.component.scss'],
})
export class BotoesSelecaoComponent implements OnInit {
  constructor(
    private selectionService: SelectionTableService<Usuario>,
    private matSnackBar: MatSnackBar
  ) {}

  get selection() {
    return this.selectionService.selection.selected;
  }

  ngOnInit(): void {}

  bloquear() {
    this.matSnackBar.open('Usuários bloqueados');
  }

  desbloquear() {
    this.matSnackBar.open('Usuários desbloqueados');
  }

  sendEmail() {
    this.matSnackBar.open('Email enviado');
  }
}
