import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginRegisterServiceService } from 'src/Service/login-register-service.service';
import { LoginStatusService } from 'src/Service/login-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service:LoginRegisterServiceService,
    private loginstatus:LoginStatusService,
    private router:Router,
    private mat:MatSnackBar
  ) { }

  UserData={
    email:"deeputrivedi0409@gmail.com",
    password:"deepu"
  }

  ngOnInit(
  ): void {
  }

  formSubmitdata(){
    console.log(this.UserData);
    this.service.loginData(this.UserData).subscribe(
      (data:any)=>{
        console.log(data);
        this.loginstatus.setToken(data.token);
        this.loginstatus.setRole(data.authority[0].authority);

        if(this.loginstatus.getRole()=="ADMIN"){
          window.location.href='/admin'
        }
        else{
          window.location.href='/user'
        }
        
        


        
      },
      (error)=>{
        console.log(error);
        this.mat.open("Wrong E-mail and password","ok",{
          duration:2000
        })
        
      }
    )
    
  }

}
