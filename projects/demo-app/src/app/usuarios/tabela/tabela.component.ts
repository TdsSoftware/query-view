import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { DataViewService } from 'data-view';

import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
  providers: [DataViewService],
})
export class TabelaComponent implements OnInit {
  data$: Observable<Usuario[]>;
  displayedColumns = ['id', 'avatar', 'username', 'email'];

  constructor(
    private dataViewService: DataViewService,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.data$ = this.dataViewService.getData<Usuario>((params) =>
      this.usuariosService.getAll(params)
    );
  }
}
