import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DataViewStateService } from 'data-view';

import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  data$: Observable<Usuario[]>;

  displayedColumns = ['avatar', 'username', 'email'];

  constructor(
    private dataViewStateService: DataViewStateService,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.data$ = this.dataViewStateService.getData<Usuario>(() =>
      this.usuariosService.getAll()
    );
  }
}
