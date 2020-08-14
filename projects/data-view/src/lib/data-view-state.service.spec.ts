import { TestBed } from '@angular/core/testing';

import { DataViewStateService } from './data-view-state.service';

describe('DataViewStateService', () => {
  let service: DataViewStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataViewStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
