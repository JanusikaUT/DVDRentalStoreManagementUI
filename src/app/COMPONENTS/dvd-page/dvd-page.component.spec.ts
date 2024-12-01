import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdPageComponent } from './dvd-page.component';

describe('DvdPageComponent', () => {
  let component: DvdPageComponent;
  let fixture: ComponentFixture<DvdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DvdPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
