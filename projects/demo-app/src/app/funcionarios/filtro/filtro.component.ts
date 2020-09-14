import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  form = new FormGroup({ idadeMax: new FormControl(60) });

  constructor() {}

  ngOnInit() {}

  transform(formValue: any) {
    const filter: any = {};

    if (formValue.idadeMax != 60) {
      filter.idadeMax = formValue.idadeMax;
    }

    return Object.keys(filter).length ? filter : null;
  }
}
