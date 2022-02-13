import { TestBed } from '@angular/core/testing';

import { ApiRestCallsService } from './api-rest-calls.service';

describe('ApiRestCallsService', () => {
  let service: ApiRestCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRestCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
