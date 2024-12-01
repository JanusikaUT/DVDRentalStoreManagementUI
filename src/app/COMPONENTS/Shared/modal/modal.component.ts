import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = ''; // Modal title
  @Input() dvd: any = {}; // DVD data for editing
  @Input() isEditMode: boolean = false; // Determines if it's edit or add mode
  @Output() save: EventEmitter<any> = new EventEmitter(); // Emit save event
  @Output() close: EventEmitter<void> = new EventEmitter(); // Emit close event

  onSave() {
    this.save.emit(this.dvd); // Pass the DVD data to the parent component
  }

  onClose() {
    this.close.emit(); // Notify parent to close the modal
  }
}
