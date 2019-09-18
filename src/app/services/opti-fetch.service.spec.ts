import { TestBed } from '@angular/core/testing';

import { OptiFetchService } from './opti-fetch.service';

describe('OptiFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptiFetchService = TestBed.get(OptiFetchService);
    expect(service).toBeTruthy();
  });
});
