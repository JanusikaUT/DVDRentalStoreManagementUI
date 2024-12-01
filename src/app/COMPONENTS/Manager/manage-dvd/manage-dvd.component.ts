import { Component, OnInit } from '@angular/core';
import { DvdService } from '../../../SERVICES/dvd.service';

@Component({
  selector: 'app-manage-dvd',
  templateUrl: './manage-dvd.component.html',
  styleUrl: './manage-dvd.component.css'
})
export class ManageDvdComponent implements OnInit{
  dvds: any[] = [];
  showModal = false;
  selectedDvd: any = {};
  isEditMode = false;
  constructor(private dvdService: DvdService) {}

  ngOnInit() {
    this.dvdService.getDvds().subscribe((data) => (this.dvds = data));
  }

  openAddDvdModal() {
    this.selectedDvd = {}; // Reset DVD data
    this.isEditMode = false; // Add mode
    this.showModal = true;
  }

  editDvd(dvd: any) {
    this.selectedDvd = { ...dvd }; // Clone DVD data
    this.isEditMode = true; // Edit mode
    this.showModal = true;
  }

  deleteDvd(dvd: any) {
    if (confirm(`Are you sure you want to delete "${dvd.title}"?`)) {
      this.dvdService.deleteDvd(dvd.id).subscribe(() => {
        this.dvds = this.dvds.filter((item) => item.id !== dvd.id);
        alert('DVD deleted successfully!');
      });
    }
  }

  saveDvd(dvd: any) {
    if (this.isEditMode) {
      this.dvdService.updateDvd(dvd).subscribe((updatedDvd) => {
        const index = this.dvds.findIndex((item) => item.id === updatedDvd.id);
        if (index > -1) this.dvds[index] = updatedDvd;
        this.showModal = false;
      });
    } else {
      this.dvdService.addDvd(dvd).subscribe((newDvd) => {
        this.dvds.push(newDvd);
        this.showModal = false;
      });
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
