import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookingDetail } from './URL';


@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  constructor(
    private http:HttpClient
  ) { }

  getParticularDetails(id:any){
    return this.http.get(`${bookingDetail}/getParticularBookingDetails/${id}`);
  }

  deleteTicket(data:any){
    return this.http.put(`${bookingDetail}/deleteTicket`,data);
  }
}
