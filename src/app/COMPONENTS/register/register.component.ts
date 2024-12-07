import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../SERVICES/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from '../../SERVICES/customer.service';
import { NgForm } from '@angular/forms';

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
  role:string = '';

  constructor(private authService: AuthService, private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void{}

  
  // Register function
  register(registerForm: NgForm) {
    if (registerForm.valid) {
      const formData = registerForm.value; // Collect form data

      // You can send this data to a backend API, e.g., a POST request to register a user
      this.authService.register(formData).subscribe(
        response => {
          // Handle success response
          console.log('Registration successful', response);
        },
        error => {
          // Handle error response
          console.error('Registration failed', error);
        }
      );
    }
  }
}
