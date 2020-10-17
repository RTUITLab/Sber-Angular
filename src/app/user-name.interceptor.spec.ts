import { TestBed } from '@angular/core/testing';

import { UserNameInterceptor } from './user-name.interceptor';

describe('UserNameInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserNameInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UserNameInterceptor = TestBed.inject(UserNameInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
