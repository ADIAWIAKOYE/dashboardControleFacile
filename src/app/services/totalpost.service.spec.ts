import { TestBed } from '@angular/core/testing';

import { TotalpostService } from './totalpost.service';

describe('TotalpostService', () => {
  let service: TotalpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
