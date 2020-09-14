import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FilterService, QueryViewService } from 'query-view';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
  styleUrls: ['./filter-wrapper.component.scss'],
})
export class FilterWrapperComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() titulo: string = 'Filtros';
  @Input() fnSubmit: (values: any) => any;

  subscription = new Subscription();
  inicial: any;

  constructor(
    private queryViewService: QueryViewService,
    public filtro: FilterService
  ) {}

  ngOnInit(): void {
    this.inicial = this.form.value;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    const values = this.fnSubmit
      ? this.fnSubmit(this.form.value)
      : this.form.value;
    this.queryViewService.filtrar(values);
  }

  reset() {
    this.form.setValue(this.inicial);
    this.submit();
  }
}
