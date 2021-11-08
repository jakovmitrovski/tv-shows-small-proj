import { TestBed } from '@angular/core/testing';

import { SearchShowService } from './search-show.service';

describe('SearchShowService', () => {
  let service: SearchShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
