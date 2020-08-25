import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Parametros } from 'core';
import { QueryViewService } from '../query-view.service';
import { FilterService } from '../filter/filter.service';

interface FilterBadge {
  numFilters: number;
  hidden: boolean;
}

@Component({
  selector: 'tds-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() titulo: string;
  @Input() filter: boolean;

  constructor(
    private queryViewService: QueryViewService,
    private filterService: FilterService
  ) {}

  filterBadge$: Observable<FilterBadge>;

  ngOnInit(): void {
    this.filterBadge$ = this.queryViewService.parametros$.pipe(
      map((params) => this.mapFilterBadge(params))
    );
  }

  mapFilterBadge(params: Parametros) {
    const numFilters = params?.filtro ? Object.keys(params.filtro).length : 0;
    const hidden = numFilters === 0;
    return <FilterBadge>{ numFilters, hidden };
  }

  refresh() {
    this.queryViewService.refresh();
  }

  toggle() {
    this.filterService.alternar();
  }
}
