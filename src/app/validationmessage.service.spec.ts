import { TestBed } from '@angular/core/testing';

import { ValidationmessageService } from './validationmessage.service';

describe('ValidationmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationmessageService = TestBed.get(ValidationmessageService);
    expect(service).toBeTruthy();
  });
});
