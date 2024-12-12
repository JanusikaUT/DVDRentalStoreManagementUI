import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReturnComponent } from './manage-return.component';

describe('ManageReturnComponent', () => {
  let component: ManageReturnComponent;
  let fixture: ComponentFixture<ManageReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
