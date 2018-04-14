import { TestBed, inject } from '@angular/core/testing';

import { NewsSectionService } from './news-section.service';

describe('NewsSectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsSectionService]
    });
  });

  it('should be created', inject([NewsSectionService], (service: NewsSectionService) => {
    expect(service).toBeTruthy();
  }));
});
