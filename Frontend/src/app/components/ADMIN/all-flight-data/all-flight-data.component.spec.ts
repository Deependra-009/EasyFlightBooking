import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlightDataComponent } from './all-flight-data.component';

describe('AllFlightDataComponent', () => {
  let component: AllFlightDataComponent;
  let fixture: ComponentFixture<AllFlightDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFlightDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFlightDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
