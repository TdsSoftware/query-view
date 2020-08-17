import { Component, OnInit, Input, Type } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';

import { DataViewStateService } from '../data-view-state.service';
import { DataViewMediaService } from '../data-view-media.service';

@Component({
  selector: 'tds-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
})
export class DataViewComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() table: Type<any>;
  @Input() filter: Type<any>;
  @Input() margin: string;
  @Input() elevation: number = 2;
  @Input() pageSize: number = 10;

  filterOpened$ = this.stateService.filterOpened$;
  loading$ = this.stateService.loading$;
  filterMode$ = new BehaviorSubject<'over' | 'side'>('side');
  subscriptions = new Subscription();
  hasFilter: boolean;

  constructor(
    private stateService: DataViewStateService,
    private mediaService: DataViewMediaService
  ) {}

  ngOnInit(): void {
    this.hasFilter = this.filter ? true : false;
    this.listenMediaChange();
    this.stateService.changePageSize(this.pageSize);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  close() {
    this.stateService.closeFilter();
  }

  listenMediaChange() {
    const subs = this.mediaService.media$.subscribe((values) =>
      this.filterMode$.next(values.includes('lt-md') ? 'over' : 'side')
    );
    this.subscriptions.add(subs);
  }

  getElevation() {
    return this.margin ? `mat-elevation-z${this.elevation}` : null;
  }
}
