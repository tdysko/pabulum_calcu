import { TestBed } from '@angular/core/testing';

import { HeightvalidatorService } from './heightvalidator.service';

describe('HeightvalidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeightvalidatorService = TestBed.get(HeightvalidatorService);
    expect(service).toBeTruthy();
  });
});
