import { Component, OnInit } from '@angular/core';
import { FlightDataServiceService } from 'src/Service/flight-data-service.service';
import Swal from 'sweetalert2';
import axios from 'axios';
import { DataTransferServiceService } from 'src/Service/data-transfer-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  From = ['Lucknow', 'Delhi']
  To = ['Lucknow', 'Delhi', 'Pune']
  Number = ['1']
  childNumber = ['0']
  returnDateValue = true;
  toggleOn = false;
  minDate = new Date;
  JourneyDate = new Date;

  SearchData = {
    arrival: '',
    destination: '',
    journeyDate: '',
    returnDate: '',
    noOfAdult: '',
    noOfChildern: '',
    noOfInfant: ''
  }

  constructor(
    private service: FlightDataServiceService,
    private dataTransfer: DataTransferServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  enableReturnDate() {
    // this.returnDateValue = true;
    this.toggleOn=!this.toggleOn;


    
    
    if (this.toggleOn == true) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'This feature is not available yet'
      })



    }

  }

  messageshown() {
    Swal.fire({
      title: "Searching Flights ...",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    })


  }

  formSubmit() {

    var date = this.JourneyDate.getDate() + "/" + (this.JourneyDate.getMonth() + 1) + "/" + this.JourneyDate.getFullYear();
    this.SearchData.journeyDate = date;

    if (this.SearchData.arrival == '' || this.SearchData.arrival == null) {
      this.snackBar.open("From is Required!!!", "", {
        duration: 2000,
      })
      return;
    }
    else if(this.SearchData.arrival==this.SearchData.destination){
      this.snackBar.open("Arrival and Destination should not be same!!!", "", {
        duration: 2000,
      })
      return;
    }
    else if (this.SearchData.destination == '' || this.SearchData.destination == null) {
      this.snackBar.open("Destination is Required!!!", "", {
        duration: 2000,
      })
      return;
    }
    else if (this.SearchData.journeyDate == '' || this.SearchData.journeyDate == null) {
      this.snackBar.open("Journey Date is Required!!!", "", {
        duration: 2000,
      })
      return;
    }
    else if (this.SearchData.noOfAdult == '' || this.SearchData.noOfAdult == null) {
      this.snackBar.open("No of Adult is Required!!!", "", {
        duration: 2000,
      })
      return;
    }
    else if (this.SearchData.noOfChildern == '' || this.SearchData.noOfChildern == null) {
      this.snackBar.open("No of Children is Required!!!", "", {
        duration: 2000,
      })
      return;
    }
    else if (this.SearchData.noOfInfant == '' || this.SearchData.noOfInfant == null) {
      this.snackBar.open("No of Infant is Required!!!", "", {
        duration: 2000,
      })
      return;
    }
    

      console.log(this.SearchData);
      this.dataTransfer.setSearchData(this.SearchData)

      this.service.getAllData(this.SearchData).subscribe(
        (data: any) => {

          this.dataTransfer.setResult(data)
          console.log(this.dataTransfer.getResult());

          this.messageshown();

          this.router.navigateByUrl('/user/search-page')


        },
        (error) => {
          console.log(error);

        }
      )
    








  }




}
