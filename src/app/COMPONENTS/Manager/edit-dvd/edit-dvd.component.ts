import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DvdService } from '../../../SERVICES/dvd.service';



declare var bootstrap: any;




@Component({
  selector: 'app-edit-dvd',
  templateUrl: './edit-dvd.component.html',
  styleUrl: './edit-dvd.component.css'
})
export class EditDvdComponent {
  editDvdForm: FormGroup;
  @ViewChild('editDvdModal') editDvdModal!: ElementRef;

  dvdId: number =0;
showeditform:boolean= false;
modalInstance: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dvdService: DvdService,
    private router: Router,
    private toastr:ToastrService
  ) {
    this.editDvdForm = this.fb.group({
      title: [''],
      price: [0],
      copiesAvailable: [0],
      director: [{ value: '', disabled: true }],
      genre: [{ value: '', disabled: true }],
    });
  }

  ngOnInit() {
    // Get DVD ID from route
    this.dvdId = Number(this.route.snapshot.paramMap.get('id'));
  
    // Fetch DVD details and populate the form
    if (this.dvdId) {
      this.dvdService.getsingledvd(this.dvdId).subscribe((dvd) => {
        this.editDvdForm.patchValue(dvd); // Patch the rest of the form
        this.openModal(); // Open modal once data is ready
      });
    }
  }

  updateDvd(): void {
    if (this.editDvdForm.invalid) {
      this.toastr.error('Please fill all required fields', 'Validation Error');
      return;
    }

    const updatedData = this.editDvdForm.value;
    updatedData.id = this.dvdId;

    this.dvdService.updateDvd(updatedData).subscribe({
      next: () => {
        this.toastr.success('DVD updated successfully', 'Success');
        this.router.navigate(['/manager-dashboard']);
        this.closeModal()
      },
      error: (err) => {
        this.toastr.error(err.error || 'Failed to update DVD', 'Error');
      },
    });
  }

  
  

  // Open modal
  openModal() {
    this.modalInstance = new bootstrap.Modal(this.editDvdModal.nativeElement);
    this.modalInstance.show();
  }

  // Close modal
  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
      this.router.navigate(['/admin'])
    }
  }
}
