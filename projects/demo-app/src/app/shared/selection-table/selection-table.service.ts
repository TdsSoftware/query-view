import { Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable()
export class SelectionTableService<T> {
  selection = new SelectionModel<T>(true, []);

  constructor() {}
}
