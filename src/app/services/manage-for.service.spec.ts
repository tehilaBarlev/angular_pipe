import { TestBed } from '@angular/core/testing';

import { ManageForService } from './manage-for.service';

describe('ManageForService', () => {
  let service: ManageForService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageForService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
