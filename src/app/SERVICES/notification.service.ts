import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = `${environment.apiUrl}/notifications`;

  constructor(private http: HttpClient) {}

  // Get all notifications
  getAllNotifications(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Get notification by ID
  getNotificationById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Create new notification
  createNotification(notification: any): Observable<any> {
    return this.http.post(this.apiUrl, notification);
  }

  // Delete notification
  deleteNotification(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
