import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataTransferServiceService } from 'src/Service/data-transfer-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  NoOfPassenger=[1,2];

  flightData = {
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
  }

  PassengerData={
    firstName:"",
    lastName:""
  }

  userData = {
    firstName:"",
    lastname:"",
    street:"",
    city:"",
    state:"",
    pinCode:"",
    phoneNumber:"",
    email:"",
    bookingReferenceNumber:""
  }

  constructor(
    private dataTransfer:DataTransferServiceService,
    private router:Router,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {

    this.flightData=this.dataTransfer.getFlightData();
    
    console.log(this.flightData);

    this.userData=this.dataTransfer.getUserData();
    
    
    
  }

  formSubmit(){

    if(this.userData.firstName=='' || this.userData.firstName==null){
      this.snackbar.open("firstname is required!!!",'',{
        duration:2000
      })
      return;
    }
    else if(this.userData.lastname=='' || this.userData.lastname==null){
      this.snackbar.open("Lastname is required!!!",'',{
        duration:2000
      })
      return;
    }
    else if(this.userData.email=='' || this.userData.email==null){
      this.snackbar.open("E-mail is required!!!",'',{
        duration:2000
      })
      return;
    }
    else if(this.userData.phoneNumber=='' || this.userData.phoneNumber==null){
      this.snackbar.open("Phone Number is required!!!",'',{
        duration:2000
      })
      return;
    }
    else if(this.userData.city=='' || this.userData.city==null){
      this.snackbar.open("City is required!!!",'',{
        duration:2000
      })
      return;
    }
    else if(this.userData.pinCode=='' || this.userData.pinCode==null){
      this.snackbar.open("Pin Code is required!!!",'',{
        duration:2000
      })
      return;
    }
    
    this.dataTransfer.setUserData(this.userData);
    this.router.navigateByUrl("/user/payment-page");
    


  console.log(this.userData);

  }
  

}
