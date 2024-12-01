import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit{
  totalRentals = 0;
  totalDvds = 0;
  totalCustomers = 0;

  constructor() {}

  ngOnInit() {
    // Fetch data (e.g., from a service) and assign to these properties
    this.totalRentals = 120; // Example data
    this.totalDvds = 300; // Example data
    this.totalCustomers = 80; // Example data
  }
}
