import { TestBed } from '@angular/core/testing';

import { RequirementsdataService } from './requirementsdata.service';

describe('RequirementsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirementsdataService = TestBed.get(RequirementsdataService);
    expect(service).toBeTruthy();
  });
});
