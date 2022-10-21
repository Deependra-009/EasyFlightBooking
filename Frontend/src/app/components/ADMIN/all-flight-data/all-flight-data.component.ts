import { Component, OnInit } from '@angular/core';
import { FlightDataServiceService } from 'src/Service/flight-data-service.service';
import { DataTransferServiceService } from 'src/Service/data-transfer-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all-flight-data',
  templateUrl: './all-flight-data.component.html',
  styleUrls: ['./all-flight-data.component.css']
})
export class AllFlightDataComponent implements OnInit {

  From = ['Lucknow', 'Delhi']
  To = ['Lucknow', 'Delhi', 'Pune']

  dataFound=false;

  result:any=[]

  SearchData={
    arrival:"",
    destination:"",
    journeyDate:"",
    returnDate:"",
    noOfAdult:"1",
    noOfChildern:"0",
    noOfInfant:"0"
  }

  FlightName=["indigo","GoAir"]
  FlightType=["Non Stop","1 Stop","2 Stop"]
  FlightPrice=["Low","High"]

  Indigo="./../../../assets/images/Indigo.png";
  AirAsia="./../../../assets/images/AirAsia India.png";
  Vistara="./../../../assets/images/Vistara.png";

  constructor(
    private service:FlightDataServiceService,
    private dataTransfer:DataTransferServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.dataFound=false;
    // const data=localStorage.getItem("data");
    // if(data!=null){
    //   this.result=JSON.parse(data);
    // }
    // console.log(this.result);
    
  }

  searchFlightData(){
    console.log(this.SearchData);
    this.service.getAllData(this.SearchData).subscribe(
      (data)=>{
        this.result=data;
        console.log(Object.keys(this.result).length);
        
        if(Object.keys(this.result).length==0){
          this.dataFound=true;
        }
        else{
          this.dataFound=false;
        }
        console.log(data);
        // localStorage.setItem("data",JSON.stringify(data));
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
  }

  editFlightData(data:any){
    console.log(data);
    this.dataTransfer.setFlightData(data);
    localStorage.setItem("editdata",JSON.stringify(data));
    this.router.navigateByUrl("/admin/edit-flight-data");


  }

  deleteFlightData(id:any){
    console.log(id);

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.deleteFlightData(id).subscribe(
          (data)=>{
            this.result=this.result.filter((e:any)=>e.id!=id);
            console.log(data);
            Swal.fire('Delete Successfull!', '', 'success')
            // location.href="/admin/all-flight-data";
          },
          (error)=>{
    console.log(error);
    
          }
        )
        // Swal.fire('Saved!', '', 'success')
      }
    })

    
    
  }

}
