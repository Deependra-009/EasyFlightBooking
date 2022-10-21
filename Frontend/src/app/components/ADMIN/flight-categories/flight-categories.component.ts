import { Component, OnInit } from '@angular/core';
import { FlightDataServiceService } from 'src/Service/flight-data-service.service';

@Component({
  selector: 'app-flight-categories',
  templateUrl: './flight-categories.component.html',
  styleUrls: ['./flight-categories.component.css']
})
export class FlightCategoriesComponent implements OnInit {

  Categories=['Indigo','AirAsia India','Vistara']

  category:any

  result:any=[]
  data:any=[]

  

  SearchData={
    arrival:"",
    destination:"",
    journeyDate:"",
    returnDate:"",
    noOfAdult:"1",
    noOfChildern:"0",
    noOfInfant:"0"
  }

  constructor(
    private service:FlightDataServiceService,
  ) { }

  ngOnInit(): void {
    this.service.getAllData(this.SearchData).subscribe(
      (data)=>{
        this.result=data
        this.data=data;
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )

    
    
  }

  categoryMethod(){
    
    console.log(this.category);

    this.result=this.data.filter((e:any)=>(e.flightName===this.category))
    
    
    
  }

}
