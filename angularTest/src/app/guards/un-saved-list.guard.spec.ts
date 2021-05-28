import { TestBed } from '@angular/core/testing';

import { UnSavedListGuard } from './un-saved-list.guard';

describe('UnSavedListGuard', () => {
  let guard: UnSavedListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnSavedListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
