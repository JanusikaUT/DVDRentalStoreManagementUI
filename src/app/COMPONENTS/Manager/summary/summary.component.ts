import { Component, OnInit } from '@angular/core';
import { DvdService } from '../../../SERVICES/dvd.service';
import { Rental } from '../../../models/Rental';
import { Customer } from '../../../models/Customer';
import { Dvd } from '../../../models/dvd';
import { CustomerService } from '../../../SERVICES/customer.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit{
rental:Rental[]=[]
customer:Customer[]=[]
dvd:Dvd[]=[]

  constructor(private dvdservice:DvdService,private customerservice:CustomerService) {}

  ngOnInit() {
   this.loadcustomercount()
   this.loaddvdcount()
   this.loadrentalcount()
  }

  loadrentalcount() {
    this.dvdservice.getallrental().subscribe(data=>{
      this.rental=data
      console.log(this.rental)
    })
  
  }
loadcustomercount() {
 this.customerservice.getallusers().subscribe(data=>{
  this.customer=data
  console.log(this.customer)

 })
}

loaddvdcount() {
this.dvdservice.getDvds().subscribe(data=>{
  this.dvd=data
  console.log(this.dvd)

})
}

}
