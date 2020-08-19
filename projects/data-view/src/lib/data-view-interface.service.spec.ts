import { TestBed } from '@angular/core/testing';

import { DataViewInterfaceService } from './data-view-interface.service';

describe('DataViewInterfaceService', () => {
  let service: DataViewInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataViewInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
