import { TestBed } from '@angular/core/testing';

import { MyUiLibService } from './my-ui-lib.service';

describe('MyUiLibService', () => {
  let service: MyUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
