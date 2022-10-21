import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferServiceService } from 'src/Service/data-transfer-service.service';

@Component({
  selector: '',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  result:any=[]

  FlightName=["indigo","GoAir"]
  FlightType=["Non Stop","1 Stop","2 Stop"]
  FlightPrice=["Low","High"]

  Indigo="./../../../assets/images/Indigo.png";
  AirAsia="./../../../assets/images/AirAsia India.png";
  Vistara="./../../../assets/images/Vistara.png";

 
  constructor(
    private dataTransfer:DataTransferServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {

    
    
    
    this.result=this.dataTransfer.getResult();

    console.log(this.result);
    
    
  }

  bookingFunction(data:any){
    data.date=this.dataTransfer.getSearchData().journeyDate;
    this.dataTransfer.setFlightData(data);
    
    this.router.navigateByUrl('/user/user-details');
  }

}
