import { TestBed } from '@angular/core/testing';

import { WeightvalidatorService } from './weightvalidator.service';

describe('WeightvalidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeightvalidatorService = TestBed.get(WeightvalidatorService);
    expect(service).toBeTruthy();
  });
});
