import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlightDataComponent } from './edit-flight-data.component';

describe('EditFlightDataComponent', () => {
  let component: EditFlightDataComponent;
  let fixture: ComponentFixture<EditFlightDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlightDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFlightDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
