import { TestBed } from '@angular/core/testing';

import { RefuseLoggedInGuard } from './refuse-logged-in.guard';

describe('RefuseLoggedInGuard', () => {
  let guard: RefuseLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RefuseLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
