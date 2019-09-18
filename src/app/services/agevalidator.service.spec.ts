import { TestBed } from '@angular/core/testing';

import { AgevalidatorService } from './agevalidator.service';

describe('AgevalidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgevalidatorService = TestBed.get(AgevalidatorService);
    expect(service).toBeTruthy();
  });
});
