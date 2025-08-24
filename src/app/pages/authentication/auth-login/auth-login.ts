import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './auth-login.html',
  styleUrls: ['./auth-login.scss'],
})
export class AuthLoginComponent {
  loginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('Login data:', this.loginForm.value);
    if (this.loginForm.invalid) return;
    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        if (error.status === 401) {
          this.loginForm
            .get('username')
            ?.setErrors({ invalidCredentials: true });

          this.loginForm.get('username')?.markAsTouched();
          this.loginForm
            .get('password')
            ?.setErrors({ invalidCredentials: true });
          this.loginForm.get('password')?.markAsTouched();
        }
        console.error('Login failed:', error);
      },
    });
  }

  onForgotPassword(e: any) {
    console.log(e);
  }
}
