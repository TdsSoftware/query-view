import { Component, OnInit, ViewChild, Input, Type } from '@angular/core';

import { FilterDirective } from './filter.directive';
import { RenderService } from '../render.service';

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
