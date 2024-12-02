import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../SERVICES/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token); // Save token
        alert('Login successful!');
        const role = this.authService.getUserRole();
        //this.router.navigate(['/dashboard']); 
        this.router.navigate([role === 'Manager' ? '/manager-dashboard' : '/customer-dashboard']);
      },
      (error) => {
        alert('Login failed. Invalid credentials.');
        console.error(error);
      }
    );
  }
}
