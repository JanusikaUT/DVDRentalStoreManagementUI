import { Component, OnInit } from '@angular/core';
import { DvdService } from '../../SERVICES/dvd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent implements OnInit {

// Array to hold overdue notifications
rentals:any[]=[]
overdueNotifications: string[] = [
  'Movie "Inception" is overdue by 2 days.',
  'Movie "Avatar" is overdue by 1 day.'
];

constructor(private dvdservice:DvdService,private router:Router){}
  ngOnInit(): void {
    this.getallrentals()
  }

getallrentals(){
this.dvdservice.getallrental().subscribe(data=>{
  this.rentals=data
  console.log("All Rentals: ",this.rentals)
})
}

browsedvd() {
this.router.navigate(['/dvds'])
  }



}
