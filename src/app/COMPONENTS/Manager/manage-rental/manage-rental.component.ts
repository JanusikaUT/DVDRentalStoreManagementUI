import { Component, OnInit } from '@angular/core';
import { Rental } from '../../../models/Rental';
import { DvdService } from '../../../SERVICES/dvd.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-rental',
  templateUrl: './manage-rental.component.html',
  styleUrl: './manage-rental.component.css'
})
export class ManageRentalComponent implements OnInit {
  rentals: Rental[] = [];


  constructor(private dvdservice:DvdService,private toastr:ToastrService){

  }
  ngOnInit(): void {
this.getrentals()
  }

  getrentals() {
    this.dvdservice.getallrental().subscribe((data) => {
      this.rentals = data;
      console.log(this.rentals);
    });
  }


  rejectAction(id: number) {
    this.dvdservice.rejectrental(id).subscribe(
      (response: any) => {
        // Handle JSON response
        this.toastr.success(response.message, 'Success');
        this.getrentals();
      },
      (error: { error: { message: string; }; }) => {
        // Handle JSON error response
        const errorMessage =
          error.error?.message || 'An unexpected error occurred.';
        this.toastr.error(errorMessage, 'Error');
      }
    );
  }

  acceptAction(id: number): void {
    this.dvdservice.acceptRental(id).subscribe({
      next: (data) => {
        console.log(data);
        // Assuming `data` contains rental information, including the DVD title
        const movieName = data;
        this.toastr.success(`Rental accepted successfully"!`, 'Success');
        this.getrentals();
      },
      error: (err) => {
        console.error('Error accepting rental:', err);
        this.toastr.error(
          'Failed to accept the rental. Please try again.',
          'Error'
        );
      },
    });
  }
}
