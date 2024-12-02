// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:5062/api/Authentication'; 

//   constructor(private http: HttpClient) {}

//   login(email: string, password: string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, { email, password });
//   }

//   register(user: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, user);
//   }

//   isLoggedIn(): boolean {
//     return localStorage.getItem('token') !== null;
//   }

//   getUserRole(): string {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const payload = JSON.parse(atob(token.split('.')[1]));
//       return payload.role;
//     }
//     return '';
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5062/api/Authentication';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUserRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role;
    }
    return '';
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}

