import { TestBed } from '@angular/core/testing';

import { LangDirectionService } from './lang-direction.service';

describe('LangDirectionService', () => {
  let service: LangDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
