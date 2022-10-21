import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginRegisterServiceService } from 'src/Service/login-register-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  isLinear=false;

  UserData={
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
    registerId:"",
    authority:"",
    active:""
  }
  OtpData={
    email:"",
    userOtp:"",
    originalOtp:""
  }




  constructor(
    private loginservice:LoginRegisterServiceService,
    private mat:MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
    
  }
  // ---------------- email check ----------------
  emailCheck(matStepper:any){
    
    this.loginservice.getForgetPasswordData(this.UserData).subscribe(
      (data:any)=>{
        this.UserData=data;
        this.UserData.password="";
        this.UserData.confirmPassword=""

        this.loginservice.sentOTP(this.UserData.email).subscribe(
          (data:any)=>{
            this.OtpData.email=data.email;
            this.OtpData.originalOtp=data.otp;
            
            
            this.mat.open("OTP send in your mail","ok",{
              duration:2000
            })
            matStepper.next();
          },
          (error)=>{
            this.mat.open("Wrong otp","ok",{
              duration:2000
            })
          }
        )
        
      },
      (error)=>{
        this.mat.open("User not found","ok",{
          duration:2000
        })

      }
    )
  }
  // --------------- checkotp ---------------------

  checkOTP(matStepper:any){
    if(this.OtpData.userOtp=='' || this.OtpData.userOtp==null){
      this.mat.open("otp required!!!","ok",{
        duration:2000
      })
      return;
    }

    if(this.OtpData.userOtp!=this.OtpData.originalOtp){
      this.mat.open("Wrong OTP","ok",{
        duration:2000
      })
      return;
    }
    matStepper.next();


  }
  //----------- submit data --------------------------

  submitData(matsteeper:any){
    if(this.UserData.password=='' || this.UserData.confirmPassword==''){
      this.mat.open("Password & Confirm Password are wrong !!!","ok",{
        duration:2000
      })
      return;
    }

    this.loginservice.updatePassword(this.UserData).subscribe(
      (data)=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Password Reset Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(()=>{
          this.router.navigateByUrl("")
        },2000)
      },
      (error)=>{
        console.log(error);
        
      }

    )


  }



  

  



}
