import { TestBed } from '@angular/core/testing';

import { NbrtotalService } from './nbrtotal.service';

describe('NbrtotalService', () => {
  let service: NbrtotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbrtotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
