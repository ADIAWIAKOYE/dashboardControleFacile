import { TestBed } from '@angular/core/testing';

import { ListesService } from './listes.service';

describe('ListesService', () => {
  let service: ListesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
