import { Component, OnInit } from '@angular/core';
import { Rental } from '../../../models/Rental';
import { DvdService } from '../../../SERVICES/dvd.service';

@Component({
  selector: 'app-manage-report',
  templateUrl: './manage-report.component.html',
  styleUrl: './manage-report.component.css'
})
export class ManageReportComponent implements OnInit {
rentals: Rental[]=[];

constructor(private dvdservice:DvdService){}
  ngOnInit(): void {
   this.loadrental()
  }

loadrental(){
  this.dvdservice.getallrental().subscribe(data=>{
    this.rentals=data
    console.log(this.rentals)
  })
}


}
