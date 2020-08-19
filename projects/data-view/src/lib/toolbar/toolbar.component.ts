import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataViewStateService } from '../data-view-state.service';
import { Parametros } from '../data-view';
import { DataViewService } from '../data-view.service';
import { DataViewInterfaceService } from '../data-view-interface.service';

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
    private stateService: DataViewStateService,
    private interfaceService: DataViewInterfaceService,
    private dataService: DataViewService
  ) {}

  filterBadge$: Observable<FilterBadge>;

  ngOnInit(): void {
    this.filterBadge$ = this.stateService.params$.pipe(
      map((params) => this.mapFilterBadge(params))
    );
  }

  mapFilterBadge(params: Parametros) {
    const numFilters = params.filter ? Object.keys(params.filter).length : 0;
    const hidden = numFilters === 0;
    return <FilterBadge>{ numFilters, hidden };
  }

  refresh() {
    this.dataService.refreshData();
  }

  toggleFilter() {
    this.interfaceService.toggleFilter();
  }
}
