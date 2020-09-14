import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FilterService, QueryViewService } from 'query-view';

import { Subscription } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
  styleUrls: ['./filter-wrapper.component.scss'],
})
export class FilterWrapperComponent implements OnInit, OnDestroy {
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

    const changes$ = this.form.valueChanges.pipe(
      debounceTime(400),
      filter(() => this.filtro.fullscreen === false)
    );

    this.subscription.add(changes$.subscribe(() => this.submit()));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    console.log('submit');

    const values = this.fnSubmit
      ? this.fnSubmit(this.form.value)
      : this.form.value;

    this.queryViewService.filtrar(values);

    if (this.filtro.fullscreen) this.filtro.fechar();
  }

  reset() {
    this.form.setValue(this.inicial);
    this.submit();
  }
}
