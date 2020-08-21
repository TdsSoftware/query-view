import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Parametros } from 'core';

@Injectable()
export class QueryViewService {
  private parametros = new BehaviorSubject<Parametros>(null);
  parametros$ = this.parametros.asObservable();
  constructor() {}
}
