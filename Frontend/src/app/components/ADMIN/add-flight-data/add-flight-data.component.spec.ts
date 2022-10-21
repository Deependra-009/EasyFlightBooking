import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightDataComponent } from './add-flight-data.component';

describe('AddFlightDataComponent', () => {
  let component: AddFlightDataComponent;
  let fixture: ComponentFixture<AddFlightDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlightDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
