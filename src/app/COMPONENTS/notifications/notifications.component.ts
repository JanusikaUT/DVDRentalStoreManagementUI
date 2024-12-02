import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../SERVICES/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationService.getAllNotifications().subscribe(
      (data) => {
        this.notifications = data;
      },
      (error) => {
        console.error('Error fetching notifications:', error);
      }
    );
  }

}
