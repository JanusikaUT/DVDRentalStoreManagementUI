import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../SERVICES/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from '../../SERVICES/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  nic: string = '';
  phone: string = '';

  constructor(private authService: AuthService, private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void {}

  register(): void {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      nic: this.nic,
      phone: this.phone,
    };

    console.log('Payload:', user); // Debug payload 

    this.authService.register(user).subscribe(
      (response) => {
        // Add the registered customer to the table without validation
        this.customerService.addCustomer(user).subscribe(() => {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error Response:', error);
        alert(error.error?.message || 'An unknown error occurred.');
      }
    );
  }
}
