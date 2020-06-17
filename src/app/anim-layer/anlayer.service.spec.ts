import { TestBed } from '@angular/core/testing';

import { AnlayerService } from './anlayer.service';

describe('AnlayerService', () => {
  let service: AnlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
