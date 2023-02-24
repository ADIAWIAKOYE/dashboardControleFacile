import { TestBed } from '@angular/core/testing';

import { LesgetsService } from './lesgets.service';

describe('LesgetsService', () => {
  let service: LesgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LesgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
