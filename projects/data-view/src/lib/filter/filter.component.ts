import { Component, OnInit, Input, Type, ViewChild } from '@angular/core';

import { FilterDirective } from './filter.directive';
import { DataViewRenderService } from '../data-view-render.service';
import { DataViewInterfaceService } from '../data-view-interface.service';

@Component({
  selector: 'tds-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filter: Type<any>;

  @ViewChild(FilterDirective, { static: true }) filterHost: FilterDirective;

  constructor(
    private interfaceService: DataViewInterfaceService,
    private renderService: DataViewRenderService
  ) {}

  ngOnInit(): void {
    this.renderService.create(this.filter, this.filterHost.viewContainerRef);
  }

  closeFilter() {
    this.interfaceService.closeFilter();
  }
}
