import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  constructor() { }

  setToken(token:any){
    localStorage.setItem("token",token);
  }

  setRole(data:any){
    localStorage.setItem("Role",data);
  }

  // setData(data:any){
  //   localStorage.setItem("user-data",data);
  // }
  // getData(){
  //   const data=localStorage.getItem("user-data");
  //   if(data!=null) return JSON.parse(data);
    
  // }

  getRole(){
    return localStorage.getItem("Role");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  isLoggedIn(){
    return localStorage.getItem("token")==null?false:true;
  }

  loggedOut(){
    localStorage.removeItem("token");
  }
}
