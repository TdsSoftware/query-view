import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  private darkTheme = new BehaviorSubject(false);

  darkTheme$ = this.darkTheme.asObservable();

  constructor() {}

  toggleTheme() {
    this.darkTheme.next(!this.darkTheme.value);
  }
}
