import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Rental } from '../models/Rental';

export interface Dvd {
copiesAvailable: number;
  id: number;
  title: string;
  genre: string;
  director: string;
  releaseDate: Date;
  availableCopies: number;
  imagePath?: string; // Optional to handle missing images
  imageUrl?:any;


}

@Injectable({
  providedIn: 'root'
})
export class DvdService {

 
  private apiUrl = 'http://localhost:5062/api/DVDs';

  constructor(private http: HttpClient) {}

  getDvds() {
    return this.http.get<Dvd[]>('http://localhost:5062/api/Manager/GetAllDVDs');
  }

  addDvd(dvd: FormData) {
    return this.http.post('http://localhost:5062/api/Manager/AddDVD', dvd);
  }

  updateDvd(id: number, dvd: Dvd): Observable<Dvd> {
    return this.http.put<Dvd>(`${this.apiUrl}/${id}`, dvd);
  }

  deleteDvd(id: number){
    return this.http.delete(`http://localhost:5062/api/Manager/${id}`);
  }

  rentDvd(rentalRequest: { customerId: number; dvdId: number; rentalDate: string }) {
 
    return this.http.post('http://localhost:5062/api/Rentals/AddRental', rentalRequest);
  }

  getallrental(){
    return this.http.get<Rental[]>('http://localhost:5062/api/Rentals/GetAllRental')
  }

  acceptRental(id: number) {
    return this.http.put(`http://localhost:5062/api/Rentals/RentalAccept/${id}`, null);
  }
  
  rejectrental(id:number){
    return this.http.put(`http://localhost:5062/api/Rentals/RejectRental/${id}`,null)
  }
    // Fetch rentals by customer ID
    getRentalsByCustomer(customerId: number){
      return this.http.get<Rental[]>(`http://localhost:5062/api/Rentals/GetRentalsByCustomer/${customerId}`);
    }
  
      // Process the return of a specific rental
      returnRental(rentalId: number){
        return this.http.put(`http://localhost:5062/api/Rentals/ReturnRental/${rentalId}`, null);
      }

  
}
