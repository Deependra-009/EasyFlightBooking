import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterServiceService } from 'src/Service/login-register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserData={
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
  }

  constructor(
    private service:LoginRegisterServiceService,
    private router:Router

  ) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.UserData);

    this.service.registerData(this.UserData).subscribe(
      (data)=>{
        console.log(data);
        console.log("register successful");
        window.location.href=""
        
      },
      (error)=>{
        console.log(error);
        
      }
    )

    
  }

}
