import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {
// Array to hold overdue notifications
overdueNotifications: string[] = [
  'Movie "Inception" is overdue by 2 days.',
  'Movie "Avatar" is overdue by 1 day.'
];
}
