import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  // Import the 'tap' operator

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5062/api/Authentication';

  constructor(private http: HttpClient,private router:Router) {}

  

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/login`, { email, password }, { headers }).pipe(
      tap((response: any) => {
        if (response?.token) {
          localStorage.setItem('token', response.token);  // Store token after login
          this.handleLoginRedirect();  // Redirect after storing token
        }
      })
    );
    
  }

  register(user: NgForm): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/register`, user, { headers });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload?.role || '';
      } catch (error) {
        console.error('Invalid token:', error);
        return '';
      }
    }
    return '';
  }

  

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

 
  // Add a method to handle login and redirect based on role
  handleLoginRedirect(): void {
     const role = this.getUserRole();  // Get the user role from the token
    // if (role === 'Customer') {
    //   this.router.navigate(['/customer-dashboard']);  // Redirect to customer dashboard
    // } else if (role === 'Manager') {
    //   this.router.navigate(['/manager-dashboard']);  // Redirect to manager dashboard
    // }
    console.log('Redirecting based on role:', role); // Debugging log
  if (role === 'Customer') {
    this.router.navigate(['/customer-dashboard']);
  } else if (role === 'Manager') {
    this.router.navigate(['/manager-dashboard']);
  } else {
    console.error('Unknown role or no role provided:', role); // Log unknown roles
    this.router.navigate(['/login']); // Redirect to login as fallback
  }
  }
}
