import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlightDataServiceService } from 'src/Service/flight-data-service.service';
import { AirAsia, Indigo, Vistara } from 'src/Service/FlightImages';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  FlightName = ['Indigo', 'Air Asia', 'Vistara'];

  Hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  Minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

  totalTime: String = ""

  check: boolean = true;
  submit: boolean = false



  FlightData = {
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
    totalSeat: "",
    date: ""
  }



  Time = {
    "arrival": {
      hour: "",
      minute: ""
    },
    "detination": {
      hour: "",
      minute: ""
    }
  }

  constructor(
    private service: FlightDataServiceService,
    private mat: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  setTime() {
    const d1 = new Date();
    const d2 = new Date();
    d1.setHours(Number(this.Time.arrival.hour));
    d1.setMinutes(Number(this.Time.arrival.minute));
    d2.setHours(Number(this.Time.detination.hour));
    d2.setMinutes(Number(this.Time.detination.minute));


    const dateDifference = d1.getTime() > d2.getTime() ? (d1.getTime() - d2.getTime()) : (d2.getTime() - d1.getTime())


    var msec = dateDifference;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
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
    const time = hours + "h"+" "+minutes+"m";
    this.FlightData.arrivalTime=this.Time.arrival.hour+":"+this.Time.arrival.minute;
    this.FlightData.destinationTime=this.Time.detination.hour+":"+this.Time.detination.minute;
    this.FlightData.totalTime = time;
    return time;
  }



  addFlightData() {




    
    console.log(this.FlightData);





    this.service.addFlightData(this.FlightData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('', 'Flight data add succeefully', 'success')
        window.location.href="/admin"
      },
      (error) => {
        console.log(error);

      }
    )
  }

  checkData() {
    if (this.FlightData.arrival == "") {
      this.mat.open('Arrival is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.FlightData.destination == "") {
      this.mat.open('Destination is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.FlightData.flightName == "") {
      this.mat.open('Flight Name is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.FlightData.flightId == "") {
      this.mat.open('Flight ID is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.FlightData.flightType == "") {
      this.mat.open('Flight Type is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.FlightData.amount == "") {
      this.mat.open('Amount is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.FlightData.totalSeat == "") {
      this.mat.open('Total Seat is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.Time.arrival.hour == "") {
      this.mat.open('Arrival Hour is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.Time.arrival.minute == "") {
      this.mat.open('Arrival Minute is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.Time.detination.hour == "") {
      this.mat.open('Destination Hour is Required', '', {
        duration: 3000
      })
      return;
    }
    if (this.Time.detination.minute == "") {
      this.mat.open('Destination Minute is Required', '', {
        duration: 3000
      })
      return;
    }

    if (this.FlightData.flightName == "Indigo") {
      this.FlightData.image = Indigo
    }
    else if (this.FlightData.flightName == "Air Asia") {
      this.FlightData.image = AirAsia;
    }
    else if (this.FlightData.flightName == "Vistara") {
      this.FlightData.image = Vistara
    }

    this.check = !this.check;
    this.submit = !this.submit;
    this.setTime()

  }



}
