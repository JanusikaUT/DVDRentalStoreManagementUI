import { Component, OnInit } from '@angular/core';
import { DvdService } from '../../SERVICES/dvd.service';
import { AuthService } from '../../SERVICES/auth.service';
import { Router } from '@angular/router';
import { Dvd } from '../../models/dvd';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dvd-page',
  templateUrl: './dvd-page.component.html',
  styleUrl: './dvd-page.component.css'
})

export class DvdPageComponent implements OnInit{
  isLoggedIn: boolean = false;
  dvds:Dvd[]=[];
  filteredDvds: Dvd[] = [];
  
 customerId = 0; 

 activeFilter: string = 'All'; // Track the active filter
   
  
  constructor(
    private dvdService: DvdService,
    private authService: AuthService,
    private router: Router,
    private toastr:ToastrService      
    
  ) {}

  // ngOnInit(): void {
  //   this.isLoggedIn = this.authService.isLoggedIn();
  //   this.loaddvds()
  //   this.handleFilter(this.activeFilter); 

  //   if (this.isLoggedIn) {
  //     this.authService.handleLoginRedirect(); 
  //   }
  // }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);  // Redirect to login if not logged in
    } else {
      this.loaddvds();
      this.handleFilter(this.activeFilter); // Set initial filter
    }
  }



  rentDvd(id: number): void {

    const getcustomer = localStorage.getItem('customer'); // Retrieve the customer from localStorage
    if (getcustomer) {
      try {
        const customer = JSON.parse(getcustomer);
        console.log(customer.Id); // Parse the JSON string to an object
        if (customer.Id) {
          this.customerId = +customer.Id; // Assign the ID to cusId
          console.log(this.customerId);
        }
      } catch (error) {
        console.error('Error parsing customer data from localStorage:', error);
        this.toastr.error('Failed to retrieve customer history.', 'Error');
        return;
      }
    }
    const rental = {
      dvdId:id ,
      customerId: this.customerId,
      rentalDate: new Date().toISOString(),
    };
    this.dvdService.rentDvd(rental).subscribe(
      () => {
        this.toastr.success('DVD rented successfully!');
        this.loaddvds(); // Refresh the list if needed
      },
      (error) => {
        this.toastr.error('Error renting DVD:', error);
        alert('Failed to rent DVD.');
      }
    );
  }
  loaddvds() {
    this.dvdService.getDvds().subscribe(data=>{
        this.dvds=data
        this.handleFilter(this.activeFilter); // Apply current filter
        console.log("Dvds: ",this.dvds)
        
    })
  }
  
  handleFilter(genre: string): void {
    this.activeFilter = genre; // Update the active filte
    if (genre === 'All') {
      this.filteredDvds = [...this.dvds];
    } else {
      this.filteredDvds = this.dvds.filter(dvd => dvd.genre === genre);
    }
  }
}
