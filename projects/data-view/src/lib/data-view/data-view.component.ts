import { Component, OnInit, Input, Type } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';

import { DataViewMediaService } from '../data-view-media.service';
import { DataViewService } from '../data-view.service';
import { DataViewInterfaceService } from '../data-view-interface.service';
import { DataViewStateService } from '../data-view-state.service';

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
  @Input() paginator = true;

  filterOpened$ = this.interfaceService.filter$;
  loading$ = this.dataService.loading$;
  filterMode$ = new BehaviorSubject<'over' | 'side'>('side');
  subscriptions = new Subscription();
  hasFilter: boolean;

  constructor(
    private interfaceService: DataViewInterfaceService,
    private dataService: DataViewService,
    private mediaService: DataViewMediaService,
    private stateService: DataViewStateService
  ) {}

  ngOnInit(): void {
    this.hasFilter = this.filter ? true : false;
    this.listenMediaChange();
    if (this.paginator) this.stateService.changePageSize(this.pageSize);

    this.stateService.iniciar();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  close() {
    this.interfaceService.closeFilter();
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
