import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDvdComponent } from './manage-dvd.component';

describe('ManageDvdComponent', () => {
  let component: ManageDvdComponent;
  let fixture: ComponentFixture<ManageDvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageDvdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
