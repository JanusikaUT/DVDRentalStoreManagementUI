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
  private apiUrl = 'http://localhost:5062/api/Customers';
  private registerurl='http://localhost:5062/api/Authentication/register';
  private loginurl='http://localhost:5276/api/Auth/CustomerLogin';

  constructor(private http: HttpClient) { }

  
  getusers(){
    return this.http.get<Customer[]>('')
  }
  // getCustomers(){
  //   return this.http.get<Customer[]>(this.apiUrl);
  // }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching customers:', error);
        return of([]); // Return an empty array on error
      })
    );
  }

  getcustomerbyid(customerId:number){
    return this.http.get<Customer>(this.apiUrl+"/"+customerId);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(id: number, customer: Customer){
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: number){
    // return this.http.delete('http://localhost:5062/api/Authentication'+id);
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getallusers(){
    return this.http.get<any>('http://localhost:5062/api/Customers/Getalluser');
  }
}
