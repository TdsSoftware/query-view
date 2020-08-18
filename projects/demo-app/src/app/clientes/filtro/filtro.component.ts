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
  departamento: FormControl;
  departList: string[];
  departListFiltered$: Observable<string[]>;

  constructor(private dataViewStateService: DataViewStateService) {}

  ngOnInit(): void {
    this.departList = [
      ...new Set(CLIENTES_MOCK_DATA.map((x) => x.departamento)),
    ].sort();

    this.departamento = new FormControl();

    this.form = new FormGroup({
      departamento: this.departamento,
    });

    this.departListFiltered$ = this.departamento.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  onSubmit() {
    const filter: { [key: string]: any } = {};

    if (this.departamento.value) {
      filter.departamento = this.departamento.value;
    }

    this.dataViewStateService.changeFilter(filter);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.departList.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
