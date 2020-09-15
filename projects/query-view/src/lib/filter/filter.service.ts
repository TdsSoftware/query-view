import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FilterService {
  private filter = new BehaviorSubject(false);
  filter$ = this.filter.asObservable();

  private fullscreenSource = new BehaviorSubject(false);
  fullscreen$ = this.fullscreenSource.asObservable();

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
    const atual = this.fullscreen;
    this.fullscreenSource.next(value);

    if (atual === false && value) this.fechar();
  }

  get fullscreen() {
    return this.fullscreenSource.value;
  }
}
