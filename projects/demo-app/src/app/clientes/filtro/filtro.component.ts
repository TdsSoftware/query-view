import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  departamento = new FormControl('');
  departamentos = this.clienteService.getDepartamentos();
  departamentos$: Observable<string[]>;

  pais = new FormControl('');
  paises = this.clienteService.getPaises();
  paises$: Observable<string[]>;

  moeda = new FormControl('');
  moedas = this.clienteService.getMoedas();
  moedas$: Observable<string[]>;

  form = new FormGroup({
    departamento: this.departamento,
    pais: this.pais,
    moeda: this.moeda,
  });

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {
    this.departamentos$ = this.departamento.valueChanges.pipe(
      map((value) => this.filterList(this.departamentos, value))
    );

    this.paises$ = this.pais.valueChanges.pipe(
      map((value) => this.filterList(this.paises, value))
    );

    this.moedas$ = this.moeda.valueChanges.pipe(
      map((value) => this.filterList(this.moedas, value))
    );
  }

  transform(formValue: any) {
    const filter: { [key: string]: any } = {};

    if (formValue.departamento) {
      filter.departamento = formValue.departamento;
    }

    if (formValue.pais) {
      filter.pais = formValue.pais;
    }

    if (formValue.moeda) {
      filter.moeda = formValue.moeda;
    }

    return filter;
  }

  filterList(list: string[], value: string): string[] {
    return list.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) === 0
    );
  }
}
