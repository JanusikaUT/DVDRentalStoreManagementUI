import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DvdService } from '../../../SERVICES/dvd.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>(); // Event emitter for closing the modal

  onClose() {
    this.closeModal.emit(); // Emit the event when the close button is clicked
  }

addDvdForm: FormGroup;
showadddvd: any;
showModal = false;

selectedFile: File | null = null;


constructor(private fb:FormBuilder,private toastr:ToastrService,private dvdservice:DvdService){
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
onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0]; // Capture the file
  }
  }
  addDvd() {
    if (this.addDvdForm.invalid) {
      this.toastr.error(
        'Please fill out all required fields',
        'Validation Error'
      );
      return;
    }

    const formData = new FormData();

    // Add form controls to FormData
    formData.append('Title', this.addDvdForm.get('title')?.value);
    formData.append('Director', this.addDvdForm.get('director')?.value);
    formData.append('Genre', this.addDvdForm.get('genre')?.value);
    formData.append('Price', this.addDvdForm.get('price')?.value);
    formData.append(
      'CopiesAvailable',
      this.addDvdForm.get('CopiesAvailable')?.value
    );

    if (this.selectedFile) {
      formData.append('ImageFile', this.selectedFile, this.selectedFile.name);
    } else {
      this.toastr.error('Please select an image file.', 'Validation Error');
      return;
    }

    const releaseDate = new Date(this.addDvdForm.get('releaseDate')?.value);
    formData.append('releaseDate', releaseDate.toISOString());

    this.dvdservice.addDvd(formData).subscribe({
      next: (response) => {
        this.toastr.success('DVD added successfully', 'Success');
        this.addDvdForm.reset();
        this.onClose()
      },
      error: (err) => {
        this.toastr.error(err.error || 'Failed to add DVD', 'Error');
      },
    });
  }


 
}
