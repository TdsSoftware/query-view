import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DataViewStateService } from 'data-view';

import { CLIENTES_MOCK_DATA } from '../clientes-mock-data';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  form: FormGroup;

  departamento = new FormControl();
  departamentos: string[];
  departamentos$: Observable<string[]>;

  pais = new FormControl();
  paises: string[];
  paises$: Observable<string[]>;

  constructor(private dataViewStateService: DataViewStateService) {}

  ngOnInit(): void {
    this.departamentos = this.loadList('departamento');
    this.paises = this.loadList('pais');

    this.form = new FormGroup({
      departamento: this.departamento,
      pais: this.pais,
    });

    this.departamentos$ = this.departamento.valueChanges.pipe(
      map((value) => this.filteredList(this.departamentos, value))
    );

    this.paises$ = this.pais.valueChanges.pipe(
      map((value) => this.filteredList(this.paises, value))
    );
  }

  onSubmit() {
    const filter: { [key: string]: any } = {};

    if (this.departamento.value) {
      filter.departamento = this.departamento.value;
    }

    if (this.pais.value) {
      filter.pais = this.pais.value;
    }

    this.dataViewStateService.changeFilter(filter);
  }

  filteredList(list: string[], value: string): string[] {
    return list.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) === 0
    );
  }

  loadList(key: string) {
    return [...new Set(CLIENTES_MOCK_DATA.map((x) => x[key]))].sort();
  }
}
