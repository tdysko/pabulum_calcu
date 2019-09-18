import { TestBed } from '@angular/core/testing';

import { RequirementsdatasheetService } from './requirementsdatasheet.service';

describe('RequirementsdatasheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirementsdatasheetService = TestBed.get(RequirementsdatasheetService);
    expect(service).toBeTruthy();
  });
});
