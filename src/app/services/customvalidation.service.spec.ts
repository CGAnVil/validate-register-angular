import { TestBed } from '@angular/core/testing';

import { CustomValidationService } from './customValidation.service';

describe('CustomvalidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomValidationService = TestBed.get(CustomValidationService);
    expect(service).toBeTruthy();
  });
});
