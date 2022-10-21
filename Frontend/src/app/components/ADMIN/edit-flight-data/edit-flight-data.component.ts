import { Component, OnInit } from '@angular/core';
import { FlightDataServiceService } from 'src/Service/flight-data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-flight-data',
  templateUrl: './edit-flight-data.component.html',
  styleUrls: ['./edit-flight-data.component.css']
})
export class EditFlightDataComponent implements OnInit {

  check: boolean = true;
  update: boolean = false;

  flightData = {
    arrival: "",
    destination: "",
    flightName: "",
    flightId: "",
    arrivalTime: "",
    destinationTime: "",
    totalTime: "",
    flightType: "",
    amount: "",
    image: "",
    totalSeat: ""
  }

  constructor(
    private service:FlightDataServiceService
  ) { }

  ngOnInit(): void {


    const data = localStorage.getItem("editdata");
    if (data != null) {
      console.log(JSON.parse(data));
      this.flightData = JSON.parse(data);
      this.flightData.totalTime = "";

    }
  }

  checkData() {

    const arr1 = this.flightData.arrivalTime.split(":");
    const arr2 = this.flightData.destinationTime.split(":");
    const d1 = new Date();
    const d2 = new Date();

    d1.setHours(Number(arr1[0]));
    d1.setMinutes(Number(arr1[1]));
    d2.setHours(Number(arr2[0]));
    d2.setMinutes(Number(arr2[1]));




    const dateDifference = d1.getTime() > d2.getTime() ? (d1.getTime() - d2.getTime()) : (d2.getTime() - d1.getTime())


    var msec = dateDifference;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    console.log(hh + " " + mm);

    var hours: String = "";
    if (String(hh).length != 2) {
      hours = "0" + hh;
    }
    else {
      hours = String(hh);
    }
    var minutes: String = "";
    if (String(mm).length != 2) {
      minutes = "0" + mm;
    }
    else {
      minutes = String(mm);
    }
    const time = hours + "h" + " " + minutes + "m";
    console.log(time);
    this.flightData.totalTime = time;



    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.check=!this.check;
        this.update=!this.update
        // Swal.fire('Saved!', '', 'success')
      }
    })

  }

  updateData(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.updateFlightData(this.flightData).subscribe(
          (data)=>{
            console.log(data);
            Swal.fire('Saved!', '', 'success')
            setTimeout(()=>{
              location.href="/admin/all-flight-data"
            },2000)
    
            
          },
          (error)=>{
            console.log(error);
            Swal.fire('Something is wrong!', '', 'error')
            
          }
        )
        
        
        
      }
    })
  }

}
