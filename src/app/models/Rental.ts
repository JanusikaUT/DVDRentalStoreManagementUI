import { Customer } from "./Customer";
import { Dvd } from "./dvd";

export interface Rental {
  rentalId: number; // Unique identifier for the rental
  customerId: number; // ID of the customer who rented the DVD
  dvdId: number; // ID of the rented DVD
  rentalDate: Date; // Date when the rental was created
  returnDate?: Date; // Optional: Date when the rental was returned
  isOverdue?: boolean; // Optional: Indicates if the rental is overdue (defaults to false)
  status: string;
  customer?: User;
  dvd?: Dvd;
  // Status of the rental (e.g., "Pending")
}

export interface User{
  id: number,
  name: string,
  email:string
}