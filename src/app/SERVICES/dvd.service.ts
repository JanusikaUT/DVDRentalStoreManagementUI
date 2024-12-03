import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface Dvd {
  id: number;
  title: string;
  genre: string;
  director: string;
  releaseDate: string;
  availableCopies: number;
}

@Injectable({
  providedIn: 'root'
})
export class DvdService {
 
  private apiUrl = 'http://localhost:5062/api/DVDs';

  constructor(private http: HttpClient) {}

  getDvds(): Observable<Dvd[]> {
    return this.http.get<Dvd[]>(this.apiUrl);
  }

  addDvd(dvd: Dvd): Observable<Dvd> {
    return this.http.post<Dvd>(this.apiUrl, dvd);
  }

  updateDvd(id: number, dvd: Dvd): Observable<Dvd> {
    return this.http.put<Dvd>(`${this.apiUrl}/${id}`, dvd);
  }

  deleteDvd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  rentDvd(dvdId: number, customerId: number): Observable<void> {
    const rental = {
      dvdId: dvdId,
      customerId: customerId,
      rentalDate: new Date().toISOString(),
    };
    return this.http.post<void>('http://localhost:5062/api/rentals', rental);
  }
  
}
