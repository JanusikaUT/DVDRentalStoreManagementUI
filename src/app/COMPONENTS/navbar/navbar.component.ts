import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../SERVICES/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = false;
  userRole: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.isLoggedIn = this.authService.isLoggedIn();
    // this.userRole = this.authService.getUserRole();
    if (this.authService.isLoggedIn()) {
      this.userRole = this.authService.getUserRole();
    }
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
