import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { DataViewStateService } from 'data-view';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  form: FormGroup;
  idadeMax: FormControl;
  subscription = new Subscription();

  constructor(private dataViewState: DataViewStateService) {}

  ngOnInit(): void {
    this.idadeMax = new FormControl(60);

    this.form = new FormGroup({
      idadeMax: this.idadeMax,
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    const value = this.handleFormValues(this.form.value);
    this.dataViewState.changeFilter(value);
  }

  handleFormValues(values: any): any {
    const filter: any = {};

    if (values.idadeMax != 60) {
      filter.idadeMax = values.idadeMax;
    }

    return Object.keys(filter).length ? filter : null;
  }
}
