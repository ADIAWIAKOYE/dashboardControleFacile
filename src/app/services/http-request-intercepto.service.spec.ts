import { TestBed } from '@angular/core/testing';

import { HttpRequestInterceptoService } from './http-request-intercepto.service';

describe('HttpRequestInterceptoService', () => {
  let service: HttpRequestInterceptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestInterceptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
