import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginGuardComponent } from './login-guard';
import { AuthService } from '../../services/auth/auth-service';

describe('LoginGuardComponent', () => {
  let guard: LoginGuardComponent;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        LoginGuardComponent,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    guard = TestBed.inject(LoginGuardComponent);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
