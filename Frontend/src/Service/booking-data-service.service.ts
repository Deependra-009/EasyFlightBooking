import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {bookingDataUrl} from './URL';

@Injectable({
  providedIn: 'root'
})
export class BookingDataServiceService {

  constructor(
    private http:HttpClient
  ) { }

    addBookingData(data:any){
      return this.http.post(`${bookingDataUrl}/addBookingData`,data);
    }

    getAllBookingData(){
      return this.http.get(`${bookingDataUrl}/getBookingDetails`);
    }
    
  
}
