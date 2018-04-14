import { TestBed, inject } from '@angular/core/testing';

import { SolutionSectionService } from './solution-section.service';

describe('SolutionSectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolutionSectionService]
    });
  });

  it('should be created', inject([SolutionSectionService], (service: SolutionSectionService) => {
    expect(service).toBeTruthy();
  }));
});
