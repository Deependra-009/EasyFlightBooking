import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferServiceService {

  referenceID:any

  //---------- search data -----------------

  SearchData = {
    arrival: "",
    destination: "",
    journeyDate: "",
    returnDate: "",
    noOfAdult: "",
    noOfChildern: "",
    noOfInfant: ""
  }

  //---------- select flight data -----------------

  flightData = {
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
  }

  //---------- user data -----------------

  userData = {
    firstName:"",
    lastname:"",
    street:"",
    city:"",
    state:"",
    pinCode:"",
    phoneNumber:"",
    email:"",
    bookingReferenceNumber:""
  }

  result:any=[]

  constructor() { }

  //---------- search data -----------------

  setSearchData(data:any){
    this.SearchData=data;
  }

  getSearchData(){
    return this.SearchData;
  }

  setResult(data:any){
    this.result=data;
  }
  getResult(){
    return this.result;
  }

  //---------- select flight data -----------------

  setFlightData(data:any){
    this.flightData=data;
  }

  getFlightData(){
    return this.flightData;
  }

  //---------- user data -----------------

  setUserData(data:any){
    this.userData=data;
  }
  getUserData(){
    return this.userData;
  }



  setReferenceID(data:any){
    this.referenceID=data;
  }
  getReferenceID(){
    return this.referenceID
  }

  
}
