import { TestBed } from '@angular/core/testing';

import { BlogViewResourceService } from './blog-view-resource.service';

describe('BlogViewResourceService', () => {
  let service: BlogViewResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogViewResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
