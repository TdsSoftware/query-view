import { Component, OnInit, ViewChild, Input, Type } from '@angular/core';

import { RenderService, FilterDirective } from 'core';

@Component({
  selector: 'tds-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filter: Type<any>;

  @ViewChild(FilterDirective, { static: true }) filterHost: FilterDirective;

  constructor(private renderService: RenderService) {}

  ngOnInit(): void {
    this.renderService.create(this.filter, this.filterHost.viewContainerRef);
  }
}
