import { TestBed } from '@angular/core/testing';

import { ResourcesserviceService } from './resourcesservice.service';

describe('ResourcesserviceService', () => {
  let service: ResourcesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourcesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
