import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCategoriesComponent } from './flight-categories.component';

describe('FlightCategoriesComponent', () => {
  let component: FlightCategoriesComponent;
  let fixture: ComponentFixture<FlightCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
