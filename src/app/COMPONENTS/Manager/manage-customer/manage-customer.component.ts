import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../../../SERVICES/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {
  customers: Customer[] = [];
  customerForm: FormGroup;
  isEditing: boolean = false;
  editingCustomerId: number | null = null;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    this.customerForm = this.fb.group({
      id:[],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nic: ['', Validators.required],
      phone: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => {
      console.log(customers);  // Check if data is returned
      this.customers = customers;
    }, error => {
      console.error('Error fetching customers:', error);  // Log any errors
    });
  }

  addOrUpdateCustomer(): void {
    if (this.isEditing && this.editingCustomerId) {
      // Update customer
      this.customerService
        .updateCustomer(this.editingCustomerId, this.customerForm.value)
        .subscribe(() => {
          this.fetchCustomers();
          this.resetForm();
        });
    } else {
      // Add customer
      // this.customerService.addCustomer(this.customerForm.value).subscribe(customer => {
      //   this.customers.push(customer); 
      //   this.resetForm();
      // });
      this.customerService.addCustomer(this.customerForm.value).subscribe(() => {
        this.fetchCustomers(); // Refresh customers
        this.resetForm();
      });
    }
  }

  editCustomer(customer: Customer): void {
    this.isEditing = true;
    this.editingCustomerId = customer.customerId || null;
    this.customerForm.patchValue(customer);
  }

  deleteCustomer(id: number): void {
    console.log(id)
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe(() => {
        this.fetchCustomers();
      });
    }
  }

  resetForm(): void {
    this.customerForm.reset();
    this.isEditing = false;
    this.editingCustomerId = null;
  }
}
