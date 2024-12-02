import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface Dvd {
  id?: number;
  title: string;
  genre: string;
  director: string;
  releaseDate?: string;
  availableCopies?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  // private dvds = [
  //   { id: 1, title: 'Movie 1', genre: 'Action', director: 'Director 1' },
  //   { id: 2, title: 'Movie 2', genre: 'Drama', director: 'Director 2' },
  // ];
  // private baseUrl = 'http://localhost:5062/api/DVDs'; 
  // constructor(private http:HttpClient) { }
  // Get all DVDs
  // getDvds(): Observable<any[]> {
  //   return this.http.get<any[]>(this.baseUrl);
  // }

  // addDvd(newDvd: any): Observable<any> {
  //   newDvd.id = Date.now(); 
  //   this.dvds.push(newDvd);
  //   return of(newDvd);
  // }
  
  // updateDvd(updatedDvd: any): Observable<any> {
  //   const index = this.dvds.findIndex((dvd) => dvd.id === updatedDvd.id);
  //   if (index > -1) this.dvds[index] = updatedDvd;
  //   return of(updatedDvd);
  // }
  
  // deleteDvd(dvdId: number): Observable<any> {
  //   this.dvds = this.dvds.filter((dvd) => dvd.id !== dvdId);
  //   return of({ message: 'Deleted successfully' });
  // }

  // rentDvd(dvdId: number): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/rent/${dvdId}`, {});
  // }
  private apiUrl = 'http://localhost:5062/api/DVDs';

  constructor(private http: HttpClient) {}

  // getDvds(): Observable<Dvd[]> {
  //   return this.http.get<Dvd[]>(this.apiUrl);
  // }
  getDvds(): Observable<Dvd[]> {
    return this.http.get<Dvd[]>(this.apiUrl).pipe(
      map((dvds) =>
        dvds.map((dvd) => ({
          ...dvd,
          //releaseDate: dvd.releaseDate || 'Unknown',
       // availableCopies: dvd.availableCopies || 0,
        // image: dvd.image || 'assets/default-image.jpg', 
        }))
      )
    );
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
