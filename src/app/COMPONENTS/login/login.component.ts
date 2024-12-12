import { Component } from '@angular/core';
import { AuthService } from '../../SERVICES/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  forgotEmail: string = '';

  constructor(private authService: AuthService, private router: Router,private http: HttpClient, private toastr: ToastrService) {}

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

    // Forgot Password logic
    onForgotPassword() {
      const payload = { email: this.forgotEmail };
  
      this.http.post('https://your-api-url/api/auth/forgot-password', payload)
        .subscribe({
          next: (response: any) => {
            // Handle success response
            this.toastr.success('Password reset link sent to your email!', 'Success');
            this.forgotEmail = ''; // Clear the email field
          },
          error: (error) => {
            // Handle error response
            this.toastr.error('Failed to send reset link. Please try again.', 'Error');
          }
        });
    }
  
}
