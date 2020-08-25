import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { QueryViewService } from 'query-view';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  idadeMax = new FormControl(60);
  form = new FormGroup({ idadeMax: this.idadeMax });
  subscription = new Subscription();

  constructor(private queryViewService: QueryViewService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe((values) => this.submit(values))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit(values: any) {
    const filter: any = {};

    if (values.idadeMax != 60) {
      filter.idadeMax = values.idadeMax;
    }

    this.queryViewService.filtrar(Object.keys(filter).length ? filter : null);
  }
}
