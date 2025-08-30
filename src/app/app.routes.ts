import { Routes } from '@angular/router';
import { AuthGuardComponent } from './pages/authentication/auth-guard/auth-guard';
import { LoginGuardComponent } from './pages/authentication/auth-guard/login-guard';
import { DefaultLayoutComponent } from './pages/layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },

  // --- Authentication area ---
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/authentication/auth-login/auth-login.component').then(
        (m) => m.AuthLoginComponent
      ),
    canActivate: [LoginGuardComponent],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/authentication/auth-register/auth-register.component').then(
        (m) => m.AuthRegisterComponent
      ),
  },

  // --- Main secured layout ---
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuardComponent],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'residents',
        loadComponent: () =>
          import('./pages/residents/residents.component').then(
            (m) => m.ResidentsComponent
          ),
      },
    ],
  },

  // fallback
  { path: '**', redirectTo: 'login' },
];
