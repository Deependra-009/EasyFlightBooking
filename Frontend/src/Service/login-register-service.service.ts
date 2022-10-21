import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginRegister } from './URL';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterServiceService {

  constructor(
    private http:HttpClient
  ) { }

  public registerData(data:any){
    return this.http.post(`${loginRegister}/register`,data);
  }

  public updateData(id:any){
    return this.http.get(`${loginRegister}/ADMIN/disableUser/${id}`);
  }

  public loginData(data:any){
    console.log("login",data);
    
    return this.http.post(`${loginRegister}/token`,data);
  }

  public getAllRegisterData(){
    return this.http.get(`${loginRegister}/ADMIN/getAllData`);
  }

  public getForgetPasswordData(data:any){
    
    return this.http.post(`${loginRegister}/forget-password`,data);
  }

  public sentOTP(email:any){
    return this.http.get(`${loginRegister}/send-otp/${email}`);
  }

  public updatePassword(data:any){
    return this.http.put(`${loginRegister}/update-password`,data);
  }


}
