import { Component } from '@angular/core';
import { DvdService } from '../../SERVICES/dvd.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent {
  newDvd = {
    title: '',
    genre: '',
    director: '',
    image: '',
  };

  constructor(private dvdService: DvdService) {}

  // Add a new DVD
  addDvd() {
    if (
      this.newDvd.title &&
      this.newDvd.genre &&
      this.newDvd.director &&
      this.newDvd.image 
    ) {
      // this.dvdService.addDvd({ ...this.newDvd });
      alert('New DVD added successfully!');
      this.newDvd = { title: '', genre: '', director: '', image: '' }; // Reset the form
    } else {
      alert('Please fill in all fields!');
    }
  }
}
