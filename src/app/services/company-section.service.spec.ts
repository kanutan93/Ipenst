import { TestBed, inject } from '@angular/core/testing';

import { CompanySectionService } from './company-section.service';

describe('CompanySectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanySectionService]
    });
  });

  it('should be created', inject([CompanySectionService], (service: CompanySectionService) => {
    expect(service).toBeTruthy();
  }));
});
