import { TestBed } from '@angular/core/testing';

import { LoginSubrotasGuard } from './login-subrotas.guard';

describe('LoginSubrotasGuard', () => {
  let guard: LoginSubrotasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginSubrotasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
