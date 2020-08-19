import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataViewInterfaceService {
  private filter = new BehaviorSubject(false);

  filter$ = this.filter.asObservable();

  constructor() {}

  toggleFilter() {
    this.filter.next(!this.filter.value);
  }

  openFilter() {
    this.filter.next(true);
  }

  closeFilter() {
    this.filter.next(false);
  }
}
