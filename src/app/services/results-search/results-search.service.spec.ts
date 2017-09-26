import { TestBed, inject } from '@angular/core/testing';

import { ResultsSearchService } from './results-search.service';

describe('ResultsSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultsSearchService]
    });
  });

  it('should be created', inject([ResultsSearchService], (service: ResultsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
