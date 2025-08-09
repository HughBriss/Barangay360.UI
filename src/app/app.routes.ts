import { Routes } from '@angular/router';
import { AuthLogin } from './pages/authentication/auth-login/auth-login';
import { AuthGuard } from './pages/authentication/auth-guard/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: AuthLogin,
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
