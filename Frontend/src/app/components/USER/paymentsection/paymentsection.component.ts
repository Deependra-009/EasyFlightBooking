import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import * as _moment from 'moment';  

import {default as _rollupMoment, Moment} from 'moment';
import { BookingDataServiceService } from 'src/Service/booking-data-service.service';
import { DataTransferServiceService } from 'src/Service/data-transfer-service.service';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-paymentsection',
  templateUrl: './paymentsection.component.html',
  styleUrls: ['./paymentsection.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class PaymentsectionComponent implements OnInit {

  isLinear = true;
  date = new FormControl(moment());
  minDate=new Date;
  check=false;

  imgSpinnerDisable:boolean=true;
  imgTickDisable:boolean=false;
  
  



  bookingData={
    flightData : {
      arrival: "",
      destination: "",
      flightName: "",
      flightId: "",
      arrivalTime: "",
      destinationTime: "",
      totalTime: "",
      flightType:"", 
      amount: "",  
      image:"",
      totalSeat:"",
      date:"",
      bookingReferenceNumber:""
    },
    userData : {
      firstName:"",
      lastname:"",
      street:"",
      city:"",
      state:"",
      pinCode:"",
      phoneNumber:"",
      email:"",
      bookingReferenceNumber:""
    },
    cardData:{
      cardHolderName:"",
      accountNumber:"",
      cvvNumber:"",
      expiryDate:"",
      phoneNumber:"",
      status:"",
      cancelled:false
    },
    bookingDetails:{
      PNR:"",
      bookingReferenceNumber:"",
      transactionId:"",
      amount:""

    }

  }
  

  constructor(
    private _formBuilder: FormBuilder,
    private bookigService:BookingDataServiceService,
    private dataTransfer:DataTransferServiceService,
    private router:Router,
    private snackbar:MatSnackBar
  ) { 
    
  }

  ngOnInit(): void {

    this.bookingData.flightData=this.dataTransfer.getFlightData();
    this.bookingData.userData=this.dataTransfer.getUserData();

    console.log(this.bookingData);
    
  
  }
  

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
    var inputValue = (<HTMLInputElement>document.getElementById("expirydate")).value;
    this.bookingData.cardData.expiryDate=inputValue;
  }


  callFunction(stepper:MatStepper){

    if(this.bookingData.cardData.cardHolderName=='' || this.bookingData.cardData.cardHolderName==null){
      this.snackbar.open("Card Holder Name is required!!!",'',{
        duration:2000
      })
      return;
    } 
    if(this.bookingData.cardData.accountNumber=='' || this.bookingData.cardData.accountNumber==null){
      this.snackbar.open("Account Number is required!!!",'',{
        duration:2000
      })
      return;
    }
    
    if(this.bookingData.cardData.expiryDate=='' || this.bookingData.cardData.expiryDate==null){
      this.snackbar.open("Expiry Date is required!!!",'',{
        duration:2000
      })
      return;
    }
    if(this.bookingData.cardData.cvvNumber=='' || this.bookingData.cardData.cvvNumber==null){
      this.snackbar.open("CVV Number is required!!!",'',{
        duration:2000
      })
      return;
    }
    if(this.bookingData.cardData.accountNumber.length!=12 && this.bookingData.cardData.accountNumber!=''){
      this.snackbar.open("Account Number is Wrong!!!",'',{
        duration:2000
      })
      return;
    }
    if(this.bookingData.cardData.cvvNumber.length!=3 && this.bookingData.cardData.cvvNumber!=''){
      this.snackbar.open("CVV Number is Wrong!!!",'',{
        duration:2000
      })
      return;
    }
    

    stepper.next();
    

    
    
   

      this.bookigService.addBookingData(this.bookingData).subscribe(
        (data)=>{
          console.log(data);
          
        },
        (error)=>{
          console.log(error);
          
        }
      )
    
    setTimeout(()=>{
     this.imgSpinnerDisable=!this.imgSpinnerDisable;
     this.imgTickDisable=!this.imgTickDisable;
    },3000)
  }

  bookingDoneFunction(){


    window.location.href='/user';

    

  }

 
}
