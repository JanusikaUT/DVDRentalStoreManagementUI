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
   // Hardcoded DVDs
   dvds : Dvd[]= [
    {
      id:1,
      title: 'Inception',
      genre: 'Sci-Fi',
      director: 'Christopher Nolan',
      image: 'assets/images/movie2.jpg',
    },
    {
      id:2,
      title: 'The Matrix',
      genre: 'Action',
      director: 'Wachowskis',
      image: 'assets/images/movie1.jpg',
    },
    {
      id:3,
      title: 'Interstellar',
      genre: 'Sci-Fi',
      director: 'Christopher Nolan',
      image: 'assets/images/movie3.jpg',
    }
   ];
    // Add more hardcoded DVDs here
  
  
  constructor(
    private dvdService: DvdService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.dvdService.getDvds().subscribe((dvds) => {
      this.dvds = dvds;
    });
    
    this.dvdService.getDvds().subscribe((data: any[]) => {
      // Add an 'id' if it doesn't exist
      this.dvds = data.map((dvd, index) => ({
        ...dvd,
        id: dvd.id || index + 1 // Dynamically assign an id if missing
      }));
    });
  }
  // New DVD object
  newDvd = {
    title: '',
    genre: '',
    director: '',
    image: '',
  };

  // Function to add a new DVD
  addDvd() {
    if (
      this.newDvd.title &&
      this.newDvd.genre &&
      this.newDvd.director &&
      this.newDvd.image
    ) {
      this.dvds.push({ ...this.newDvd });
      this.newDvd = { title: '', genre: '', director: '', image: '' }; // Reset form
    }
  }

  // Function to rent a DVD
  // rentDvd(id: number): void {
  //   if (!this.isLoggedIn) {
  //     this.router.navigate(['/login']);
  //   } else {
  //     this.dvdService.rentDvd(id).subscribe(() => {
  //       alert('DVD rented successfully!');
  //     });
  //   }
  // }  
  rentDvd(id: number): void {
    const customerId = 1; // Replace with actual customer ID
    this.dvdService.rentDvd(id, customerId).subscribe(
      () => {
        alert('DVD rented successfully!');
        this.getDvds(); // Refresh the list if needed
      },
      (error) => {
        console.error('Error renting DVD:', error);
        alert('Failed to rent DVD.');
      }
    );
  }
  getDvds(): void {
    this.dvdService.getDvds().subscribe(
      (data: Dvd[]) => {
        this.dvds = data; // Assign fetched DVDs to the component's list
      },
      (error) => {
        console.error('Error fetching DVDs:', error);
      }
    );
  }
  
}
