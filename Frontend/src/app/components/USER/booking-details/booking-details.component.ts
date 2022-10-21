import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetailsService } from 'src/Service/booking-details.service';
import { DataTransferServiceService } from 'src/Service/data-transfer-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
 
  referenceID:any

  BookingDetails:any={

    "flightData": {
      bookingFlightDataId:"",
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
    "userData":{
      userDataId:"",
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
    "bookingDetails":{
      amount:"",
      bookingDetailsId:"",
      bookingReferenceNumber:"",
      pnr:"",
      transactionId:"",
      status:"",
      cancelled:false,
      email:""
    }


  }

  

  constructor(
    private service:BookingDetailsService,
    private dataTransfer:DataTransferServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.referenceID=this.dataTransfer.getReferenceID();
    console.log(this.referenceID);
    console.log(this.dataTransfer.getReferenceID());
    
    

    this.service.getParticularDetails(this.dataTransfer.getReferenceID()).subscribe(
      (data)=>{
        console.log("booking detials");
        
        console.log(data);
        this.BookingDetails=data;
        

      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  cancelConfirm(data:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteTicket(data).subscribe(
          (data)=>{
            console.log(data);
            this.router.navigateByUrl('/user/account-page')
            
          },
          (error)=>{
            console.log(error);
            
          }
        )
        console.log(data);
        
        Swal.fire(
          'Deleted!',
          'Your ticket has been cancelled successfully.',
          'success'
        )
      }
    })
  }

  cancelTicket(data:any){
    this.cancelConfirm(data)
    console.log(data);
    
  }



}
