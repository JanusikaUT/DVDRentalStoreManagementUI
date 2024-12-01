import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  private dvds = [
    { id: 1, title: 'Movie 1', genre: 'Action', director: 'Director 1' },
    { id: 2, title: 'Movie 2', genre: 'Drama', director: 'Director 2' },
  ];
  private baseUrl = 'http://localhost:5062/api/DVDs'; 
  constructor(private http:HttpClient) { }
  // Get all DVDs
  getDvds(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addDvd(newDvd: any): Observable<any> {
    newDvd.id = Date.now(); // Example ID generation
    this.dvds.push(newDvd);
    return of(newDvd);
  }
  
  updateDvd(updatedDvd: any): Observable<any> {
    const index = this.dvds.findIndex((dvd) => dvd.id === updatedDvd.id);
    if (index > -1) this.dvds[index] = updatedDvd;
    return of(updatedDvd);
  }
  
  deleteDvd(dvdId: number): Observable<any> {
    this.dvds = this.dvds.filter((dvd) => dvd.id !== dvdId);
    return of({ message: 'Deleted successfully' });
  }

  rentDvd(dvdId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/rent/${dvdId}`, {});
  }
}
