import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FilterService {
  private filter = new BehaviorSubject(false);
  filter$ = this.filter.asObservable();

  private fullscreen = new BehaviorSubject(false);
  fullscreen$ = this.fullscreen.asObservable();

  constructor() {}

  abrir() {
    this.filter.next(true);
  }

  fechar() {
    this.filter.next(false);
  }

  alternar() {
    this.filter.next(!this.filter.value);
  }

  setFullscreen(value: boolean) {
    this.fullscreen.next(value);
  }
}
