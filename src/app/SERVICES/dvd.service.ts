import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

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

  rentDvd(dvdId: number, customerId: number): Observable<void> {
    const rental = {
      dvdId: dvdId,
      customerId: customerId,
      rentalDate: new Date().toISOString(),
    };
    return this.http.post<void>('http://localhost:5062/api/rentals', rental);
  }

  getallrental(){
    return this.http.get<any[]>('http://localhost:5062/api/Rentals')
  }
  
}
