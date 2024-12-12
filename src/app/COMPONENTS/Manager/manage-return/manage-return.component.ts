import { Component } from '@angular/core';
import { DvdService } from '../../../SERVICES/dvd.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { Rental } from '../../../models/Rental';

@Component({
  selector: 'app-manage-return',
  templateUrl: './manage-return.component.html',
  styleUrl: './manage-return.component.css'
})
export class ManageReturnComponent {

  customerid:number=0
  rentals:Rental[]=[]

  showTable: boolean = false;

  constructor(private dvdservice:DvdService,private toastr:ToastrService,private router:Router){}


  returnRental(rentalId: number) {
    this.dvdservice.returnRental(rentalId).subscribe(
        (response) => {
            console.log('Rental returned successfully', response);
            this.toastr.success('DVD returned successfully');
            this.router.navigate(['/manager-dashboard'])
        },
        (error) => {
            console.error('Error returning rental', error);
            this.toastr.error('Failed to return DVD');
        }
    );
  }

      // Fetch rentals for a specific customer
      fetchRentals() {
        this.dvdservice.getRentalsByCustomer(this.customerid).subscribe({
          next: (data) => {
            this.rentals = data;
            this.showTable = true;
          },
          error: (err) => {
            this.toastr.error(err.error.message || 'rentalid is invalid');
            this.showTable = false;
          },
        });
      }





}
