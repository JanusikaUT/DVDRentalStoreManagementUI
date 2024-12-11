import { Component, OnInit } from '@angular/core';
import { DvdService } from '../../SERVICES/dvd.service';
import { AuthService } from '../../SERVICES/auth.service';
import { Router } from '@angular/router';
import { Dvd } from '../../models/dvd';

@Component({
  selector: 'app-dvd-page',
  templateUrl: './dvd-page.component.html',
  styleUrl: './dvd-page.component.css'
})

export class DvdPageComponent implements OnInit{
  isLoggedIn: boolean = false;
  dvds:Dvd[]=[]
   // Hardcoded DVDs
  
    // Add more hardcoded DVDs here
  
  
  constructor(
    private dvdService: DvdService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.loaddvds()
  }




  rentDvd(id: number): void {
    const customerId = 1; // Replace with actual customer ID
    this.dvdService.rentDvd(id, customerId).subscribe(
      () => {
        alert('DVD rented successfully!');
        this.loaddvds(); // Refresh the list if needed
      },
      (error) => {
        console.error('Error renting DVD:', error);
        alert('Failed to rent DVD.');
      }
    );
  }
  loaddvds() {
    this.dvdService.getDvds().subscribe(data=>{
        this.dvds=data
        console.log("Dvds: ",this.dvds)
    })
  }
  
}
