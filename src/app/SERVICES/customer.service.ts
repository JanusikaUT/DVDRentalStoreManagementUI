import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Customer {
  customerId: number;
  name: string;
  email: string;
  nic: string;
  phone?: string;
  address?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5062/api/customers';

  constructor(private http: HttpClient) { }

  // Fetch list of customers from the API
  // getCustomers(): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.apiUrl).pipe(
  //     catchError(this.handleError<Customer[]>('getCustomers', []))
  //   );
  // }

  // Add a new customer to the API
  // addCustomer(customer: Customer): Observable<Customer> {
  //   return this.http.post<Customer>(this.apiUrl, customer).pipe(
  //     catchError(this.handleError<Customer>('addCustomer'))
  //   );
  // }

  // Update an existing customer
  // updateCustomer(id: number, customer: Customer): Observable<Customer> {
  //   return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer).pipe(
  //     catchError(this.handleError<Customer>('updateCustomer'))
  //   );
  // }

  // Delete a customer by ID
  // deleteCustomer(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
  //     catchError(this.handleError<void>('deleteCustomer'))
  //   );
  // }

  // Handle HTTP errors
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(`${operation} failed: ${error.message}`);
  //     return of(result as T);  // Keep the app running by returning a default result
  //   };
  // }

  getusers(){
    return this.http.get<Customer[]>('')
  }
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(id: number, customer: Customer){
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: number){
    return this.http.delete('http://localhost:5062/api/Customers/'+id);
  }
}
