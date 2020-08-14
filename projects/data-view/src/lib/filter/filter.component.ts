import { Component, OnInit, Input, Type, ViewChild } from '@angular/core';
import { FilterDirective } from './filter.directive';
import { DataViewRenderService } from '../data-view-render.service';

@Component({
  selector: 'tds-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filter: Type<any>;

  @ViewChild(FilterDirective, { static: true }) filterHost: FilterDirective;

  constructor(
    //private stateService: DataViewStateService,
    private renderService: DataViewRenderService
  ) {}

  ngOnInit(): void {
    this.renderService.create(this.filter, this.filterHost.viewContainerRef);
  }

  closeFilter() {
    //this.stateService.closeFilter();
  }
}
