import { Rental } from "./Rental";

export interface Customer {
    id: number; // Unique identifier for the customer
    userName: string;
    phoneNumber: string;
    email: string;
    nic: string; // National ID card number
    password: string;
    Role: string; // Password for the customer account
    rentals?: Rental[]; // Collection of rentals (optional)
    isActive?: boolean; // Indicates if the customer is active (optional)
  }