import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {baseurl, bookingDataUrl} from './URL';
@Injectable({
  providedIn: 'root'
})
export class FlightDataServiceService {

  

  constructor(
    private http:HttpClient
  ) { }

  public getAllData(data:any){
    console.log("ge",data);
    
    return this.http.post(`${baseurl}/getAllData`,data);
  }

  public addFlightData(data:any){
    return this.http.post(`${baseurl}/addFlightData`,data);
  }

  public updateFlightData(data:any){
    return this.http.post(`${baseurl}/updateFlightData/ADMIN`,data);
  }

  public deleteFlightData(id:any){
    return this.http.delete(`${baseurl}/deletFlightData/ADMIN/${id}`);
  }

  
}
