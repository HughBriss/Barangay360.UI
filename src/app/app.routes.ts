import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthLoginComponent } from './pages/authentication/auth-login/auth-login';
import { AuthGuardComponent } from './pages/authentication/auth-guard/auth-guard';
import { LoginGuardComponent } from './pages/authentication/auth-guard/login-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/pages/authentication/auth-login/auth-login').then(
        (m) => m.AuthLoginComponent
      ),
      canActivate: [LoginGuardComponent]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardComponent],
  },
];
