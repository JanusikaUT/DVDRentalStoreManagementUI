import { Component } from '@angular/core';
import { AuthService } from '../../SERVICES/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        alert('Login successful!');
        const role = this.authService.getUserRole();
        console.log('User role:', role);
        this.router.navigate([role === 'Manager' ? '/manager-dashboard' : '/customer-dashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password.');
      }
    );
  }
}
