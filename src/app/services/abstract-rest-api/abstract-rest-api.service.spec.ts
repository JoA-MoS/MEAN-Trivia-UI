import { TestBed, inject } from '@angular/core/testing';

import { AbstractRestApiService } from './abstract-rest-api.service';

describe('BaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractRestApiService]
    });
  });

  it('should be created', inject([AbstractRestApiService], (service: AbstractRestApiService) => {
    expect(service).toBeTruthy();
  }));
});
