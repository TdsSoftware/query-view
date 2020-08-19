import { TestBed } from '@angular/core/testing';

import { DataViewPaginatorService } from './data-view-paginator.service';

describe('DataViewPaginatorService', () => {
  let service: DataViewPaginatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataViewPaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
