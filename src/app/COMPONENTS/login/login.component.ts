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
        // if (role === 'Manager') {
        //   this.router.navigate(['/manager-dashboard']);
        // } else if (role === 'Customer') {
        //   this.router.navigate(['/customer-dashboard']);
        // } else {
        //   alert('Role not recognized. Please contact support.');
        //   console.error('Unknown role:', role);
        //   this.authService.logout(); // Clear token if role is invalid
        // }
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password.');
      }
    );
  }
}
