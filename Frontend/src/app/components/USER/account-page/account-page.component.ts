import { Component, OnInit } from '@angular/core';
import { BookingDataServiceService } from 'src/Service/booking-data-service.service';
import { DataTransferServiceService } from 'src/Service/data-transfer-service.service';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  data=false
  constructor(
    private service:BookingDataServiceService,
    private dataTransfer:DataTransferServiceService
  ) { }

  
  AllBookingData:any=[]

  ngOnInit(): void {
    this.data=false;

    this.service.getAllBookingData().subscribe(
      (data)=>{
        console.log(data);
        this.AllBookingData=data;
       
        if(Object.keys(data).length==0){
          this.data=true;
        }
        
      },
      (error)=>{
        console.log(error);
        
      }
    )


  }

  showDetails(data:any){
    this.dataTransfer.setReferenceID(data);
    
  }


}
