import { Component, OnInit } from '@angular/core';
import {  Dvd, DvdService } from '../../../SERVICES/dvd.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-manage-dvd',
  templateUrl: './manage-dvd.component.html',
  styleUrl: './manage-dvd.component.css'
})
export class ManageDvdComponent implements OnInit{

  dvds: Dvd[] = [];
  showModal = false;
  selectedDvd: any = {};
  isEditMode = false;
  selectedFile: File | null = null;

showadddvd: any;
addDvdForm: FormGroup;
  constructor(private dvdService: DvdService,private fb:FormBuilder,private toastr:ToastrService) {
    this.addDvdForm = this.fb.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      genre: ['', Validators.required],
      price: [null, Validators.required],

      releaseDate: ['', Validators.required],
      CopiesAvailable: [null, [Validators.required, Validators.min(1)]],
      imageUrl: ['', Validators.required],
    });
  }
  

  ngOnInit() {
   this.loaddvds()
  }
loaddvds(){
  this.dvdService.getDvds().subscribe(data=>{
    this.dvds=data
    console.log("Dvds:",this.dvds)
  })
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

  deleteDvd(dvd: Dvd) {
    if (confirm(`Are you sure you want to delete "${dvd.title}"?`)) {
      this.dvdService.deleteDvd(dvd.id).subscribe(() => {
        this.toastr.success('DVD deleted successfully!');
        this.loaddvds()
      });
    }
  }

 

  saveDvd(dvd: any) {
    if (this.isEditMode) {
      this.dvdService.updateDvd(dvd.id, dvd).subscribe((updatedDvd) => {
        const index = this.dvds.findIndex((item) => item.id === updatedDvd.id);
        if (index > -1) this.dvds[index] = updatedDvd;
        this.showModal = false;
      });
    } else {
      this.dvdService.addDvd(dvd).subscribe((newDvd) => {
        this.dvds.push();
        this.showModal = false;
      });
    }
  }
  

  closeModal() {
    this.showModal = false;
  }
}
